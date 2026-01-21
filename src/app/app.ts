import { Component, signal } from '@angular/core';
import { Filter } from './filter/filter';

@Component({
  selector: 'app-root',
  imports: [Filter],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('todoApp');
}
