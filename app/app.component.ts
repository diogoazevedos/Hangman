import { Component } from '@angular/core';
import { Hangman } from './hangman'

@Component({
  selector: 'hangman',
  templateUrl: 'app/app.component.html'
})

export class AppComponent {
  alphabet: Array<string>
  game: Hangman

  constructor() {
    this.game = new Hangman('PALAVRA')
    this.alphabet = [
      'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I',
      'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
      'S', 'T', 'U','V','X','W','Y','Z',
    ]
  }

  makeGuess(guess: string) {
    console.log(guess)
    this.game.setGuess(guess)
  }
}