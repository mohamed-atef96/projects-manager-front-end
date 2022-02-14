import { ActivatedRoute, Router } from '@angular/router';
import { defaultProject } from './../../interfaces/projects.interface';
import { ProjectsService } from './../../services/projects.service';
import { Component, OnInit } from '@angular/core';
import { IProject } from 'src/app/interfaces/projects.interface';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  projects: IProject[] = [defaultProject];
  projectName: string = '';
  projectError = false;
  constructor(private projectsService: ProjectsService) {}

  ngOnInit(): void {
    this.getProjects();
  }

  addProject(name: string) {
    this.projectsService.addProject({ name }).subscribe(
      (data) => this.getProjects(),
      (err) => {
        this.projectError = true;

        setTimeout(() => {
          this.projectError = false;
        }, 3000);
      }
    );
    this.projectName = ""
  }

  getProjects() {
    this.projectsService.fetchProjects().subscribe(
      (data) => {
        this.projects = data;
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
