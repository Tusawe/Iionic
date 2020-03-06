import { Component } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../models/task';
import { Observable } from 'rxjs';
import { Router } from '@angular/router'
import { IonItemSliding } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  tasks : Observable<Task[]>

  constructor(
    private taskService : TaskService,
    private router : Router) {
    this.tasks = taskService.getTasks();
  }

  newTask(){
    this.router.navigate(['new-task'])
  }

  finishedTask(task : Task, sliding : IonItemSliding){
    task.finished = !task.finished
    this.taskService.updateTask(task).then(
      () => sliding.close()
    )
  }

  deleteTask(task : Task, sliding : IonItemSliding){
    this.taskService.deleteTask(task).then()
  }

}
