import { RickMortyEntity } from 'pods/rick-morty-characters/rick-morty-characters.model';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { DetailRickMortyCharacterComponent } from './detail-rick-morty-character.component';

interface Params {
    id: string;
}

export const DetailRickMortyCharacterContainer: React.FC = () => {
    const { id } = useParams<Params>();
    const [ character, setCharacter ] = useState<RickMortyEntity>({} as RickMortyEntity);
    React.useEffect(()=> {
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
            .then((response) => response.json())
            .then((json) => setCharacter(json))
    }, []);

    return <DetailRickMortyCharacterComponent character={character}/>
}