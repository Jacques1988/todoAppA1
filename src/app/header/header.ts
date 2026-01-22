import { Component } from '@angular/core';
import { Teaser } from '../shared/components/teaser/teaser';

@Component({
  selector: 'app-header',
  imports: [Teaser],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {}
