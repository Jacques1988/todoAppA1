import { Component, signal } from '@angular/core';
import { Teaser } from '../shared/components/teaser/teaser';
import { TaskComponent } from './task-component/task-component';

@Component({
  selector: 'app-task-list',
  imports: [Teaser, TaskComponent],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
})
export class TaskList {
  teaser = signal<string>('Task List');
}
