import { Injectable, signal } from '@angular/core';
import { taskList } from '../data/tasks-list';
import { Task } from '../shared/models/task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  taskList = taskList;
  tasks = signal<Task[]>(taskList);

  getAllTasks() {
    return this.tasks;
  }
}
