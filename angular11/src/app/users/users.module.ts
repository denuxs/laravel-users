import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersFormComponent } from './users-form/users-form.component';
import { UsersComponent } from './users.component';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [UsersFormComponent, UsersComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,

    ReactiveFormsModule
  ]
})
export class UsersModule { }
