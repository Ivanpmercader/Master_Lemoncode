import { CardEntity } from "common-app/components/card/card.model"
import { RickMortyEntity } from "pods/rick-morty-characters/rick-morty-characters.model"

export const MapRickMortyToCard = (character: RickMortyEntity): CardEntity => {
    return {
        id: character.id.toString(),
        image: character.image,
        title: character.name,
        subtitle: character.species
    }
}