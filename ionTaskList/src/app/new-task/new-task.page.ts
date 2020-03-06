import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task';
import { TaskService } from '../task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.page.html',
  styleUrls: ['./new-task.page.scss'],
})
export class NewTaskPage implements OnInit {

  constructor(private taskService : TaskService,
    private router : Router) { }

  ngOnInit() {
  }

  newTask(value){
    let task : Task = {
      name: value,
      finished: false
    }

    this.taskService.newTask(task).then(
      () => this.router.navigate(['home'])
    );

  }

}
