import React from 'react';
import { ToolbarContainer } from 'common-app/components/toolbar';
import { RickMortyEntity } from 'pods/rick-morty-characters/rick-morty-characters.model';
import * as imgClasses from 'layouts/image.layout.styles';
import * as detailBoxClases from 'layouts/detail-box.layout.styles';

interface Props {
    character: RickMortyEntity;
}

export const DetailRickMortyCharacterComponent: React.FC<Props> = (props) => {
    const { character } = props;
    const toolbar = { title: 'Rick Morty Detail', backLink: 'rickMortyCharacters' }
    return (
        <div>
            <ToolbarContainer item={toolbar}/>
            <div className={detailBoxClases.root}>
                <div className={imgClasses.rootBigImg}>
                    <img className={imgClasses.img} src={character.image} alt="Logo" />
                </div>
                <p className={detailBoxClases.lines}>ID: {character.id}</p>
                <p className={detailBoxClases.lines}>Name: {character.name}</p>
                <p className={detailBoxClases.lines}>Species: {character.species}</p>
                <p className={detailBoxClases.lines}>Image_Url: {character.image}</p>  
            </div>
        </div>
    )
}