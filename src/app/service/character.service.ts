import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Characters } from '../model/characters';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {


  constructor(private http: HttpClient) { }

  urlApi = 'https://rickandmortyapi.com/api/character';


  getAllCharacters(): Observable<any> {
    return this.http.get(this.urlApi);
  }

  getRandomCharacter(): Observable<Characters> {
    const characterId = Math.floor(Math.random() * 826) + 1;
    return this.http.get<Characters>(`${this.urlApi}/character/${characterId}`);
  }


}
