import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Task } from './models/task';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  collection = 'tareas'

  constructor(private firestore : AngularFirestore) { }

  getTasks() : Observable<Task[]>{
    //return this.firestore.collection<Task>(this.collection).valueChanges();
    return this.firestore.collection<Task>(this.collection).snapshotChanges().pipe(
      map( tareas => {
          return tareas.map(
            tarea => {
              const data = tarea.payload.doc.data();
              const key = tarea.payload.doc.id;
              return {id: key, ...data};
            }
          )
        })
    );
  }

  newTask(task : Task) {
    return this.firestore.collection<Task>(this.collection).add(task);
  } 

  deleteTask(task : Task) {
    return this.firestore.collection<Task>(this.collection).doc(task.id).delete();
  }

  updateTask(task : Task) {
    return this.firestore.collection<Task>(this.collection).doc(task.id).set(task);
  }

}
