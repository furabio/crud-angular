import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';

import { MessageService } from 'primeng/components/common/messageservice';

import { Employee } from 'src/app/model/employee.model';
import { Address } from 'src/app/model/address.model';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  form: FormGroup;
  address: Address;
  employee: Employee;

  constructor(
    private formBuilder: FormBuilder,
    private employeeService: EmployeeService,
    private messageService: MessageService,
    private router: Router
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      id: [],
      name: ['', Validators.required],
      cpf: ['', Validators.required],
      street: ['', Validators.required],
      number: ['', Validators.required],
      district: ['', Validators.required],
      city: ['', Validators.required],
      cep: ['', Validators.required]
    });
  }

  onSubmit() {
    let fields = this.form.value;

    this.address = new Address();

    this.address.addAddress(
      fields.street,
      fields.number,
      fields.district,
      fields.city,
      fields.cep
    );

    this.employee = new Employee();
    this.employee.addEmployee(
      fields.name,
      fields.cpf,
      this.address
    );

    return this.employeeService.createEmployee(this.employee)
      .subscribe( data => {
        this.messageService.add({
          severity: 'success',
          summary: 'Success!!',
          detail: 'Funcionario inserido com sucesso!',
        });
        this.router.navigate(['funcionarios']);
    });
  }

}
