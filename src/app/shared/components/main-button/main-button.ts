import { Component, input } from '@angular/core';

@Component({
  selector: 'app-main-button',
  imports: [],
  templateUrl: './main-button.html',
  styleUrl: './main-button.css',
})
export class MainButton {
  btnText = input<string>();
}
