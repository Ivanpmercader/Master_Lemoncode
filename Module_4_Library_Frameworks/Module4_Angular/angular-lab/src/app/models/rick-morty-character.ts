import { RickMortyInfoCharacter } from "./rick-morty-info-character";
import { RickMortyInfoPages } from "./rick-morty-info-pages";

export interface RickMortyCharacter{
  info: RickMortyInfoPages;
  results: RickMortyInfoCharacter[];
}
