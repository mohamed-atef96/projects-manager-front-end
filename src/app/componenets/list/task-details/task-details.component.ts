import { defaultTask } from './../../../interfaces/tasks.interface';
import { ITask } from 'src/app/interfaces/tasks.interface';
import { TasksService } from './../../../services/tasks.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css'],
})
export class TaskDetailsComponent implements OnInit {
  taskId: string = '';
  task:ITask = defaultTask
  constructor(
    private route: ActivatedRoute,
    private tasksService: TasksService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      if (params && params.task) {
        this.taskId = params.task;
        this.getTaskById(params.task)
      }
      else{
        this.task = defaultTask
      }
    });
  }

  changeProgress(progress: number) {
    this.tasksService.changeProgress(this.taskId, { progress }).subscribe(
      (data) =>{ this.getTaskById(this.taskId)
        this.tasksService.subject$.next({progress ,taskId:this.taskId})
      },
      (err) => console.log(err)
    );
  }

  getTaskById(id: string) {
    this.tasksService.fetchTaskById(id).subscribe(
      data => this.task = data ,
      err => console.log(err)
    );
  }


}
