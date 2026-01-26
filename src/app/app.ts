import { Component, signal } from '@angular/core';
import { Filter } from './filter/filter';
import { Header } from './header/header';
import { NewTask } from './new-task/new-task';
import { TaskList } from './task-list/task-list';

@Component({
  selector: 'app-root',
  imports: [Filter, Header, NewTask, TaskList],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('todoApp');
}
