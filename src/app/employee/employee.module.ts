import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

import { InputTextModule } from 'primeng/inputtext';
import {InputMaskModule} from 'primeng/inputmask';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import {ToastModule} from 'primeng/toast';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';

import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { ListEmployeeComponent } from './list-employee/list-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';

@NgModule({
  imports: [
    CommonModule,
    InputTextModule,
    InputMaskModule,
    ButtonModule,
    TableModule,
    ReactiveFormsModule,
    ToastModule,
    MessageModule,
    MessagesModule
  ],
  declarations: [CreateEmployeeComponent, ListEmployeeComponent, EditEmployeeComponent],
  exports: [CreateEmployeeComponent, ListEmployeeComponent, EditEmployeeComponent]
})
export class EmployeeModule { }
