import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Employee } from 'src/app/model/employee.model';
import { Address } from 'src/app/model/address.model';
import { EmployeeService } from 'src/app/service/employee.service';
import { MessageService } from 'primeng/components/common/messageservice';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  editForm: FormGroup;
  input = [{cpf: '', number: '', cep: ''}];
  address: Address;
  employee: Employee;
  employeeId: any;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private employeeService: EmployeeService,
    private messageService: MessageService
    ) { }

  ngOnInit() {
    this.employeeId = localStorage.getItem('employee_id');

    if (!this.employeeId) {
      alert('Invalid Action!');
      this.router.navigate(['funcionarios']);
    }

    this.editForm = this.formBuilder.group({
      name: ['', Validators.required],
      cpf: ['', Validators.required],
      street: ['', Validators.required],
      number: ['', Validators.required],
      district: ['', Validators.required],
      city: ['', Validators.required],
      cep: ['', Validators.required],
    });

    this.employeeService.getEmployeeById(Number(this.employeeId))
      .subscribe( data => {
        this.editForm.setValue({
          name: data.name,
          cpf: data.cpf.toString(),
          street: data.address.street,
          number: data.address.number.toString(),
          district: data.address.district,
          city: data.address.city,
          cep: data.address.zipCode
        });
        this.input[0].cpf = data.cpf;
        this.input[0].number = data.address.number.toString();
        this.input[0].cep = data.address.zipCode;
      });
  }

  onSubmit() {
    let fields = this.editForm.value;

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
      this.address,
      this.employeeId
    );

    this.employeeService.updateEmployee(this.employee)
      .subscribe(
        data => {
          this.messageService.add({
            severity: 'success',
            summary: 'Success!!',
            detail: 'Funcionario editado com sucesso!',
          });
          this.router.navigate(['funcionarios']);
        },
        error => {
          this.messageService.add({
            severity: 'error',
            summary: 'error!!',
            detail: 'Não foi editar o funcionario!',
          });
      });
  }

}
