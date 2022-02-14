import { defaultTask } from './../../../interfaces/tasks.interface';
import { ITask } from 'src/app/interfaces/tasks.interface';
import { ActivatedRoute } from '@angular/router';
import { ProjectsService } from './../../../services/projects.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks-progress',
  templateUrl: './tasks-progress.component.html',
  styleUrls: ['./tasks-progress.component.css'],
})
export class TasksProgressComponent implements OnInit {
  tasks:ITask[] = [defaultTask]
  projectId =''
  constructor(
    private projectsService: ProjectsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      if (params && params.project) {
        this.projectId = params.project
        this.getProjectTasks(params.project);
      }
    });
  }

  getProjectTasks(id: string) {
    this.projectsService.fetchProjectById(id).subscribe(
      (data) => {
        this.tasks = data.tasks
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
