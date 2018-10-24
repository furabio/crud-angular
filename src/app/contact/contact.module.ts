import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';


import { InputTextModule } from 'primeng/inputtext';
import { InputMaskModule } from 'primeng/inputmask';
import {ToastModule} from 'primeng/toast';
import {TableModule} from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';

import { CreateContactComponent } from './create-contact/create-contact.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';

@NgModule({
  imports: [
    CommonModule,
    InputTextModule,
    InputMaskModule,
    ToastModule,
    TableModule,
    ButtonModule,
    ReactiveFormsModule,
    MessagesModule,
    MessageModule

  ],
  declarations: [CreateContactComponent, EditContactComponent],
  exports: [
    CreateContactComponent
  ]
})

export class ContactModule {

}
