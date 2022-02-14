import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SidebarComponent } from './componenets/sidebar/sidebar.component';
import { HomeComponent } from './pages/home/home.component';
import { NavBarComponent } from './componenets/nav-bar/nav-bar.component';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './componenets/list/list.component';
import { TableComponent } from './componenets/list/table/table.component';
import { TaskDetailsComponent } from './componenets/list/task-details/task-details.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './componenets/dashboard/dashboard.component';
import { TasksChartComponent } from './componenets/dashboard/tasks-chart/tasks-chart.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { TasksProgressComponent } from './componenets/dashboard/tasks-progress/tasks-progress.component';
import { ProjectsSliderComponent } from './componenets/dashboard/projects-slider/projects-slider.component'

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full',
  },
  {
    path: 'list',
    component: ListComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
];
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HomeComponent,
    NavBarComponent,
    ListComponent,
    TableComponent,
    TaskDetailsComponent,
    DashboardComponent,
    TasksChartComponent,
    TasksProgressComponent,
    ProjectsSliderComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes), HttpClientModule , FormsModule , NgxChartsModule,
    BrowserAnimationsModule   ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
