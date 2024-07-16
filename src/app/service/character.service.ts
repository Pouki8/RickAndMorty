import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Characters } from '../model/characters';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private url = 'https://rickandmortyapi.com/api';

  constructor(private http: HttpClient) { }

  getRandomCharacter(): Observable<Characters> {
    const characterId = Math.floor(Math.random() * 826) + 1;
    return this.http.get<Characters>(`${this.url}/character/${characterId}`);
  }


}
