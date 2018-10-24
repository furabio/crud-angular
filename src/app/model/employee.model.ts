import { Address } from './address.model';

export class Employee {
  id: number;
  name: string;
  cpf: string;
  address: Address;

  addEmployee(name: string, cpf: string, address: Address, id?: number) {
    if (id) {
      this.id = id;
    }
    this.name = name;
    this.cpf = cpf;
    this.address = address;
  }
}
