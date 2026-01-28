import { Component, input } from '@angular/core';
import { Task } from '../../shared/models/task';

@Component({
  selector: 'app-task-component',
  imports: [],
  templateUrl: './task-component.html',
  styleUrl: './task-component.css',
})
export class TaskComponent {
  task = input.required<Task>();
}
