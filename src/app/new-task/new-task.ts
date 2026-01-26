import { Component, signal } from '@angular/core';
import { Teaser } from '../shared/components/teaser/teaser';
import { MainButton } from '../shared/components/main-button/main-button';

@Component({
  selector: 'app-new-task',
  imports: [Teaser, MainButton],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css',
})
export class NewTask {
  teaser = signal<string>('Add a new Task');
}
