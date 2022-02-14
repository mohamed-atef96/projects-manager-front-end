import { ITask } from './../interfaces/tasks.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  tasksApi = `${environment.apiUrl}/task`
  subject$ = new Subject();
  constructor(private http:HttpClient) { }

  fetchTaskById(id:string):Observable<ITask>{
    return this.http.get<ITask>(`${this.tasksApi}/get/${id}`)
  }
  addTask(data:{projectId:string , name:string}):Observable<ITask>{
    return this.http.post<ITask>(`${this.tasksApi}/create` , data)
  }

  changeProgress(id:string , data:{progress:number}):Observable<ITask>{
    return this.http.post<ITask>(`${this.tasksApi}/progress/${id}` , data);
  }
}
