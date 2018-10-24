import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateEmployeeContactComponent } from './create-employee-contact/create-employee-contact.component';
import {DropdownModule} from 'primeng/dropdown';

@NgModule({
  imports: [
    CommonModule,
    DropdownModule
  ],
  declarations: [CreateEmployeeContactComponent],
  exports: [CreateEmployeeContactComponent]

})
export class EmployeeContactModule { }
