import { Component } from '@angular/core';
import { lorem } from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  phrase: string = lorem.sentence();
  enteredText: string = '';

  onInput(value: string): void {
    this.enteredText = value;
  }

  getClass(letter: string, enteredLetter: string): string {
    if (!enteredLetter) return;

    return letter === enteredLetter
      ? 'has-text-success has-text-weight-bold'
      : 'has-text-danger has-text-weight-bold';
  }
}
