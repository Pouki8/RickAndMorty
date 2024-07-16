import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../service/local-storage.service';
import { Characters } from '../model/characters';
import { CharacterService } from '../service/character.service';

@Component({
  selector: 'app-decompte',
  templateUrl: './decompte.component.html',
  styleUrls: ['./decompte.component.css']
})
export class DecompteComponent implements OnInit {
  heures: number = 0;
  minutes: number = 0;
  secondes: number = 0;
  showButton: boolean = true;
  character!: Characters;

  constructor(
    private urlApi: CharacterService,
    private localStorageService: LocalStorageService
  ) { }

  ngOnInit(): void {
    this.countdown;
  }

  countdown() {
    const totalMilliseconds = (this.heures * 3600 + this.minutes * 60 + this.secondes) * 1000;
    const endTime = new Date().getTime() + totalMilliseconds;

    const interval = setInterval(() => {
      const currentTime = new Date().getTime();
      const timeRemaining = endTime - currentTime;

      if (timeRemaining <= 0) {
        this.heures = 0;
        this.minutes = 0;
        this.secondes = 0;
        this.showButton = true;
        clearInterval(interval);
      } else {
        this.heures = Math.floor(timeRemaining / (1000 * 60 * 60));
        this.minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        this.secondes = Math.floor((timeRemaining % (1000 * 60)) / 1000);
      }
    }, 1000);
  }

  getCard() {
    this.showButton = false;
    this.urlApi.getRandomCharacter().subscribe((character: Characters) => {
      this.localStorageService.saveCharacter(character);
      this.character = character;
    });
    this.heures = 2;
    this.minutes = 0;
    this.secondes = 0;
    this.countdown();
  }

}
