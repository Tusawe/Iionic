import { Task } from '../models/task';
import { Component } from '@angular/core';
import { TaskService } from '../services/task.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tasks',
  templateUrl: 'tasks.page.html',
  styleUrls: ['tasks.page.scss'],
})
export class TasksPage {

  tasks: Observable<Task[]>;

  constructor(
    private taskService: TaskService,
    private router: Router
    ) {
    this.tasks = taskService.getTasks();
  }

  newTask() {
    this.router.navigate(['new-task']);
  }

  finishTask(slidingItem, task: Task) {
    task.finished = true;
    this.taskService.updateTask(task);
    slidingItem.close();
  }

  deleteTask(slidingItem, task: Task) {
    this.taskService.deleteTask(task);
    slidingItem.close();
  }

}
