import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { MessageService } from 'primeng/components/common/messageservice';

import { Contact } from 'src/app/model/contact.model';
import { ContactService } from 'src/app/service/contact.service';

@Component({
  selector: 'app-create-contact',
  templateUrl: './create-contact.component.html',
  styleUrls: ['./create-contact.component.css'],

})
export class CreateContactComponent implements OnInit {

  form: FormGroup;
  contacts: Contact[];
  contactDelete: Contact;

  constructor(
    private formBuilder: FormBuilder,
    private contactService: ContactService,
    private router: Router,
    private messageService: MessageService
  ) {}

  ngOnInit() {

    this.form = this.formBuilder.group({
      id: [],
      name: ['', Validators.required]
    });

    this.getContacts();
  }

  onSubmit() {
    this.contactService.createContact(this.form.value)
      .subscribe( data => {
        this.messageService.add({
          severity: 'success',
          summary: 'Success!!',
          detail: 'Categoria de contato adicionado com sucesso!',
        });
        this.getContacts();
        this.form.reset();
      });
  }

  deleteContact() {
    this.messageService.clear('c');
    this.contactService.deleteContact(this.contactDelete.id)
      .subscribe( data => {
        this.messageService.add({
          severity: 'success',
          summary: 'Success!!',
          detail: 'Funcionario deletado com sucesso!',
        });
        this.getContacts();
      });
  }

  editContact(contact: Contact) {
    localStorage.setItem('contact_id', contact.id.toString());
    this.router.navigate(['contatos/edit']);
  }

  getContacts(): void {
    this.contactService.getContacts()
      .subscribe( data => {
        this.contacts = data;
      });
  }

  showConfirm(contact: Contact) {
    this.contactDelete = contact;
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
