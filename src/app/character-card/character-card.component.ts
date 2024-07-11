import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../service/character.service';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.css']
})
export class CharacterCardComponent implements OnInit {
  characters: any[] = [];
  character: any;
  lastDrawTime!: number;

  constructor(private characterService: CharacterService) { }

  ngOnInit(): void {
    this.characterService.getAllCharacters().subscribe((data: any) => {
      this.characters = data.results;
      console.log(this.characters);
    });

    this.lastDrawTime = parseInt(localStorage.getItem('lastDrawTime') || '0', 10);
  }

  canDraw(): boolean {
    return Date.now() - this.lastDrawTime > 2 * 60 * 60 * 1000;
  }

  drawCharacter(): void {
    if (this.canDraw()) {
      this.characterService.getRandomCharacter().subscribe(character => {
        this.character = character;
        this.lastDrawTime = Date.now();
        localStorage.setItem('lastDrawTime', this.lastDrawTime.toString());
      });
    }
  }


}
