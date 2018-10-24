import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Contact } from 'src/app/model/contact.model';
import { Router } from '@angular/router';
import { ContactService } from 'src/app/service/contact.service';
import { MessageService } from 'primeng/components/common/messageservice';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {

  editForm: FormGroup;
  contactId: number;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private contactService: ContactService,
    private messageService: MessageService
  ) {  }

  ngOnInit() {
    this.contactId = Number(localStorage.getItem('contact_id'));

    if (!this.contactId) {
      this.messageService.add({
        severity: 'error',
        summary: 'ERROR!!',
        detail: 'Ação inválida!',
      });
      this.router.navigate(['contatos']);
    }

    this.editForm = this.formBuilder.group({
      id: [],
      name: ['', Validators.required]
    });

    this.contactService.getContactById(this.contactId)
      .subscribe( data => {
        this.editForm.setValue(data);
      });

  }

  onSubmit() {
    console.log(this.editForm.value);
    this.contactService.updateContact(this.editForm.value)
      .subscribe(
        data => {
          this.messageService.add({
            severity: 'success',
            summary: 'Success!!',
            detail: 'Categoria de contato editado com sucesso!',
          });
          this.router.navigate(['contatos']);
        },
        error => {
          alert(error);
      });
  }

}
