import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsersComponent } from './users.component';
import { UsersFormComponent } from './users-form/users-form.component';

const routes: Routes = [
  { path: '', component: UsersComponent },
  { path: 'create', component: UsersFormComponent },
  { path: 'edit/:id', component: UsersFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
