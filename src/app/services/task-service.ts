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

  addTask(taskName: string) {
    const newTask = {
      id: this.taskList.length + 1,
      task: taskName,
      status: 'incomplete',
      checked: false,
    };

    this.taskList.push(newTask);
  }
}
