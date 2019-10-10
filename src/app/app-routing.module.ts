import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardMainComponent } from './dashboard-main/dashboard-main.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardMainComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
