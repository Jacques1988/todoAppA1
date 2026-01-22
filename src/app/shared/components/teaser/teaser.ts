import { Component, input } from '@angular/core';

@Component({
  selector: 'app-teaser',
  imports: [],
  templateUrl: './teaser.html',
  styleUrl: './teaser.css',
})
export class Teaser {
  teaserText = input<string>();
}
