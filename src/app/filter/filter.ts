import { Component } from '@angular/core';
import { Teaser } from '../shared/components/teaser/teaser';

@Component({
  selector: 'app-filter',
  imports: [Teaser],
  templateUrl: './filter.html',
  styleUrl: './filter.css',
})
export class Filter {}
