import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListEmployeeComponent } from './employee/list-employee/list-employee.component';
import { CreateEmployeeComponent } from './employee/create-employee/create-employee.component';
import { EditEmployeeComponent } from './employee/edit-employee/edit-employee.component';
import { CreateContactComponent } from './contact/create-contact/create-contact.component';
import { EditContactComponent } from './contact/edit-contact/edit-contact.component';

const routes: Routes = [
  { path: 'funcionarios', component: ListEmployeeComponent },
  { path: 'funcionarios/add', component: CreateEmployeeComponent },
  { path: 'funcionarios/edit', component: EditEmployeeComponent },
  { path: 'contatos', component: CreateContactComponent },
  { path: 'contatos/edit', component: EditContactComponent },

  { path: '', redirectTo: 'funcionarios', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
