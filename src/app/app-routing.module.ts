import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './components/projects/projects.component';
import { TimeTrackerComponent } from './components/time-tracker/time-tracker.component';

const routes: Routes = [
  {path: 'projects', component: ProjectsComponent},
  {path: 'time-tracker', component: TimeTrackerComponent},
  {path: '**', component: TimeTrackerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
