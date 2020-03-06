import { Task } from './../models/task';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.page.html',
  styleUrls: ['./new-task.page.scss'],
})
export class NewTaskPage implements OnInit {

  constructor(
    private router: Router,
    private taskService: TaskService
  ) { }

  ngOnInit() {
  }


  newTask(nombreTarea: string) {
    let task: Task;
    task = {
      name: nombreTarea,
      finished: false
    };

    this.taskService.newTask(task).then(
      () => this.router.navigate(['tasks'])
    );

  }


}
