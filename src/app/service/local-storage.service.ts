import { Injectable } from '@angular/core';
import { Characters } from '../model/characters';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }
  private storageKey = 'rickyMortiCharacters';

  saveCharacter(character: Characters): void {
    let characters = this.getCharacters();
    characters.push(character);
    localStorage.setItem(this.storageKey, JSON.stringify(characters));
  }

  getCharacters(): Characters[] {
    let characters = localStorage.getItem(this.storageKey);
    return characters ? JSON.parse(characters) : [];
  }
}
