import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { RickMortyCharacter } from "../models/rick-morty-character";
import { RickMortyInfoCharacter } from "../models/rick-morty-info-character";
import {
  map
} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MembersService {

  constructor(private _http: HttpClient) { }

  getAll(): Observable<RickMortyInfoCharacter[]>{
    return this._http.get<RickMortyCharacter>('https://rickandmortyapi.com/api/character/')
    .pipe(
      map(
        (data: RickMortyCharacter): RickMortyInfoCharacter[] => data.results)
    );
  }

}
