import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { GroupComponent } from './group/group.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'admin', component: DashboardComponent,
    children : [
      {   path: 'user',   component: UserComponent   },
      {   path: 'group',   component: GroupComponent   }
    ]
  }
];

@NgModule({
  declarations: [UserComponent, GroupComponent, DashboardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AdminModuleModule { }
