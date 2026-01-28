import {
  Component,
  ElementRef,
  signal,
  viewChild,
  inject,
} from '@angular/core';
import { Teaser } from '../shared/components/teaser/teaser';
import { MainButton } from '../shared/components/main-button/main-button';
import { TaskService } from '../services/task-service';

@Component({
  selector: 'app-new-task',
  imports: [Teaser, MainButton],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css',
})
export class NewTask {
  taskService = inject(TaskService);
  teaser = signal<string>('Add a new Task');
  taskInput = viewChild<ElementRef<HTMLInputElement>>('taskInput');

  addTask() {
    const taskname = this.taskInput()!.nativeElement.value;
    this.taskService.addTask(taskname);
    this.taskInput()!.nativeElement.value = '';
  }
}
