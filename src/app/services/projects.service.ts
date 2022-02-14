import { IProject } from './../interfaces/projects.interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  projectsApi = `${environment.apiUrl}/project`
  constructor(private http:HttpClient) { }

  fetchProjects():Observable<IProject[]>{
    return this.http.get<IProject[]>(`${this.projectsApi}/getAll`)
  }

  fetchProjectById(id:string):Observable<IProject>{
    return this.http.get<IProject>(`${this.projectsApi}/get/${id}`)
  }

  addProject(data:{name:string}):Observable<IProject>{
    return this.http.post<IProject>(`${this.projectsApi}/create` , data)
  }
}
