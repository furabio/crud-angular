import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { EmployeeContact } from '../model/employee-contact.model';

@Injectable()
export class EmployeeContactService {

  private baseUrl = 'http://localhost:4200/api/api/e-contacts';

  constructor(private http: HttpClient) { }

  getEmployeeContactsById(id: number) {
    return this.http.get<EmployeeContact[]>(this.baseUrl + '/' + id);
  }

  getEmployeeContactById(id: number) {
    return this.http.get<EmployeeContact>(this.baseUrl + '/' + id);
  }

  createEmployeeContactById(employeeC: EmployeeContact) {
    return this.http.post(this.baseUrl, employeeC);
  }

  updateEmployeeContact(employeeC: EmployeeContact) {
    return this.http.put(this.baseUrl + '/' + employeeC.id, employeeC);
  }

  deleteEmployeeContact(id: number) {
    return this.http.delete(this.baseUrl + '/' + id);
  }
}
