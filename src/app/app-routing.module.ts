import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SammunatiComponent } from './sammunati/sammunati.component';
import { TasksummunatiComponent } from './tasksummunati/tasksummunati.component';

const routes: Routes = [
  {
    path: 'porfile',
    component: SammunatiComponent
  },
  {
    path: 'samunnati',
    component: TasksummunatiComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
