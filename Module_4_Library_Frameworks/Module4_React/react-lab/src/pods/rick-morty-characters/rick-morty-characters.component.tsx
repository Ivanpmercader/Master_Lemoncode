import React from 'react';
import { ToolbarContainer } from 'common-app/components/toolbar';
import { useDebounce } from 'use-debounce';
import { CenterLayout } from 'layouts/center.layout';
import TextField from '@material-ui/core/TextField';
import { ListLayout } from 'layouts/list.layout';
import { CardEntity } from 'common-app/components/card/card.model';
import { CardContainer } from 'common-app/components/card/card.container';
import { RickMortyEntity } from './rick-morty-characters.model';
import { MapRickMortyToCard } from 'common-app/components/card/rick-morty-card.mapper';

export const RickMortyCharactersComponent: React.FC = () => {
    const toolbar = { title: 'Rick Morty Characters', backLink: 'root' }
    const [characters, setCharacters] = React.useState<RickMortyEntity[]>([]);
    const [filter, setFilter] = React.useState<string>('');
    const [ debouncedFilter ] = useDebounce(filter, 500);

    React.useEffect(()=> {
        fetch(`https://rickandmortyapi.com/api/character/?name=${filter}`)
            .then((response) => response.json())
            .then((json) => {
                json?.error ? setCharacters([]): setCharacters(json.results);
            })
    }, [debouncedFilter]);

    return (
        <div>
            <ToolbarContainer item={toolbar}/>

            <CenterLayout>
                <form  noValidate autoComplete="off" style={{
                    margin: '2rem'
                }}>
                    <TextField id="search" label="Search By Name" placeholder={filter} value={filter}
                    onChange={(e) => setFilter(e.target.value)}/>
                </form>
                <ListLayout>
                {
                    characters.map((character) => {
                        const cardEntity: CardEntity = {...MapRickMortyToCard(character), detailLink: 'detailRickMortyCharacter'};
                        return <CardContainer key={character.id} item={cardEntity}/>
                    })
                }
                </ListLayout>    
            </CenterLayout>
        </div>
    )
}

