import { ActivatedRoute } from '@angular/router';
import { defaultTask } from './../../../interfaces/tasks.interface';
import { ITask } from 'src/app/interfaces/tasks.interface';
import { ProjectsService } from './../../../services/projects.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks-chart',
  templateUrl: './tasks-chart.component.html',
  styleUrls: ['./tasks-chart.component.css'],
})
export class TasksChartComponent implements OnInit {
  tasks:ITask[] = [defaultTask]
  projectId: string = '';
  completed: any = [];
  inProgress: any = [];
  notStarted: any = [];
  single: any = [];

  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  legendPosition: string = 'below';

  colorScheme = {
    domain: ['#5AA454', 'red', '#C7B42C', '#000'],
  };

  constructor(
    private projectsService: ProjectsService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      if (params && params.project) {
        this.projectId = params.project;
        this.completed = [];
        this.inProgress = [];
        this.notStarted = [];
        this.getProjectTasks(params.project);
      }
    });
  }

  getProjectTasks(id: string) {
    this.projectsService.fetchProjectById(id).subscribe(
      (data) => {
        this.tasks = data.tasks
        this.analyseTasks(data.tasks);
      },
      (err) => {
        console.log(err);
      }
    );
  }
  analyseTasks(tasks: ITask[]) {
    tasks.forEach((task) => {
      if (task.done) {
        this.completed.push(task);
      } else if (!task.progress) {
        this.notStarted.push(task);
      } else {
        this.inProgress.push(task);
      }

      this.single = [
        {
          name: 'Not started',
          value: this.notStarted.length,
        },
        {
          name: 'Completed',
          value: this.completed.length,
        },
        {
          name: 'In Progress',
          value: this.inProgress.length,
        },
      ];
    });
  }
}
