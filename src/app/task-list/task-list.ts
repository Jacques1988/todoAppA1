import { Component, signal, inject } from '@angular/core';
import { Teaser } from '../shared/components/teaser/teaser';
import { TaskComponent } from './task-component/task-component';
import { TaskService } from '../services/task-service';

@Component({
  selector: 'app-task-list',
  imports: [Teaser, TaskComponent],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
})
export class TaskList {
  teaser = signal<string>('Task List');
  tasks = inject(TaskService).getAllTasks();

  /* ngOnInit() {
    console.log(this.tasks());
  } */
}
