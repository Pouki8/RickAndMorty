import { Component, Input, OnInit } from '@angular/core';
import { CharacterService } from '../service/character.service';
import { Characters } from '../model/characters';
import { LocalStorageService } from '../service/local-storage.service';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.css']
})
export class CharacterCardComponent implements OnInit {
  @Input() characters!: Characters;


  constructor() { }

  ngOnInit(): void {

  }


}
