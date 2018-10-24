import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Employee } from 'src/app/model/employee.model';
import { EmployeeService } from 'src/app/service/employee.service';
import { MessageService } from 'primeng/components/common/messageservice';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {

  employees: Employee[];
  employeeDelete: Employee;

  constructor(
    private router: Router,
    private employeeService: EmployeeService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.getEmployees();
  }

  deleteEmployee() {
    this.messageService.clear('c');
    this.employeeService.deleteEmployee(this.employeeDelete.id)
    .subscribe( data => {
      this.messageService.add({
          severity: 'success',
          summary: 'Success!!',
          detail: 'Funcionario deletado com sucesso!',
        });
        this.getEmployees();
      });
  }

  editEmployee(employee: Employee) {
    localStorage.setItem('employee_id', employee.id.toString());
    this.router.navigate(['funcionarios/edit']);
  }

  addEmployee(): void {
    this.router.navigate(['funcionarios/add']);
  }

  getEmployees(): void {
    this.employeeService.getEmployees()
      .subscribe( data => {
        this.employees = data;
      });
  }

  showConfirm(employee: Employee) {
    this.employeeDelete = employee;
    this.messageService.clear();
    this.messageService.add({
      key: 'c',
      sticky: true,
      severity: 'warn',
      summary: 'Vocẽ tem certeza?',
      detail: 'Confirme para prosseguir'
    });
  }

  onReject() {
    this.messageService.clear('c');
  }


}
