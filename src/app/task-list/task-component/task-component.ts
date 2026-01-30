import { Component, input, inject } from '@angular/core';
import { Task } from '../../shared/models/task';
import { TaskService } from '../../services/task-service';

@Component({
  selector: 'app-task-component',
  imports: [],
  templateUrl: './task-component.html',
  styleUrl: './task-component.css',
})
export class TaskComponent {
  task = input.required<Task>();
  taskService = inject(TaskService);

  toggleTaskStatus() {
    this.task().checked = !this.task().checked;
    if (this.task().status === 'incomplete') {
      this.task().status = 'completed';
    } else {
      this.task().status = 'incomplete';
    }

    this.taskService.updateTask(this.task());
  }
}
