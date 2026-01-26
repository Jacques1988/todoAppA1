import { Component, signal } from '@angular/core';
import { Teaser } from '../shared/components/teaser/teaser';

@Component({
  selector: 'app-task-list',
  imports: [Teaser],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
})
export class TaskList {
  teaser = signal<string>('Task List');
}
