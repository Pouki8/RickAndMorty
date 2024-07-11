import { Component } from '@angular/core';
import { Characters } from './model/characters';
import { LocalStorageService } from './service/local-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RickAndMorty';
  characters: Characters[] = [];

  constructor(private localStorageService: LocalStorageService) { }

  ngOnInit(): void {
    this.characters = this.localStorageService.getCharacters();
  }
}
