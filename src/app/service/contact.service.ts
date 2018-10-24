import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Contact } from '../model/contact.model';

@Injectable()
export class ContactService {

  private baseUrl = 'http://localhost:4200/api/api/contacts';

  constructor(private http: HttpClient) { }

  getContacts() {
    return this.http.get<Contact[]>(this.baseUrl);
  }

  getContactById(id: number) {
    return this.http.get<Contact>(this.baseUrl + '/' + id);
  }

  createContact(contact: Contact) {
    return this.http.post(this.baseUrl, contact);
  }

  updateContact(contact: Contact) {
    return this.http.put(this.baseUrl + '/' + contact.id, contact);
  }

  deleteContact(id: number) {
    return this.http.delete(this.baseUrl + '/' + id);
  }

}
