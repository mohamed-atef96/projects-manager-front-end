import { TasksService } from './../../../services/tasks.service';
import { defaultTask } from './../../../interfaces/tasks.interface';
import { ProjectsService } from './../../../services/projects.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ITask } from 'src/app/interfaces/tasks.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  projectId = ''
  taskName:string = ''
  tasks:ITask[] = [defaultTask]
  taskError = false;
  constructor(private route:ActivatedRoute , private projectsService:ProjectsService , private tasksService:TasksService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(
      params => {
        if(params && params.project){
        this.projectId = params.project;
        this.getProjectTasks(params.project)
      }
      }
    )

    this.tasksService.subject$.subscribe(
      data => this.getProjectTasks(this.projectId)
    )

  }

  addTask(projectId:string , taskName:string){
    const name = taskName
    this.tasksService.addTask({projectId ,name}).subscribe(
      data => this.getProjectTasks(this.projectId),
      err => {

        this.taskError = true;

        setTimeout(() => {
          this.taskError = false;
        }, 3000);
      }
    )
    this.taskName =''
  }

  getProjectTasks(id:string){
    this.projectsService.fetchProjectById(id).subscribe(
      data => this.tasks = data.tasks || [defaultTask],
      err => console.log(err)
    )
  }



}
