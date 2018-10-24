import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactModule } from '../contact/contact.module';
import { NavigationModule } from '../navigation/navigation.module';
import { EmployeeModule } from '../employee/employee.module';
import { EmployeeContactModule } from '../employee-contact/employee-contact.module';

import { CreateEmployeeComponent } from '../employee/create-employee/create-employee.component';
import { NavBarComponent } from '../navigation/nav-bar/nav-bar.component';
import { CreateContactComponent } from '../contact/create-contact/create-contact.component';
import { ListEmployeeComponent } from '../employee/list-employee/list-employee.component';
import { CreateEmployeeContactComponent } from '../employee-contact/create-employee-contact/create-employee-contact.component';
import { EditEmployeeComponent } from '../employee/edit-employee/edit-employee.component';
import { EmployeeService } from '../service/employee.service';
import { ContactService } from '../service/contact.service';
import { EmployeeContactService } from '../service/employee-contact.service';
import { MessageService } from 'primeng/components/common/messageservice';



@NgModule({
  imports: [
    CommonModule,
    NavigationModule,
    ContactModule,
    EmployeeModule,
    EmployeeContactModule,

  ],
  declarations: [],
  exports: [
    NavBarComponent,
    CreateContactComponent,
    CreateEmployeeComponent,
    ListEmployeeComponent,
    CreateEmployeeContactComponent,
    EditEmployeeComponent
  ],
  providers: [
    EmployeeService,
    ContactService,
    EmployeeContactService,
    MessageService
  ]
})
export class CoreModule { }
