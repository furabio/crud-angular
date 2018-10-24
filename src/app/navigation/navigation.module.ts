import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {TieredMenuModule} from 'primeng/tieredmenu';
import { MenubarModule } from 'primeng/menubar';
import {ButtonModule} from 'primeng/button';
import {MenuModule} from 'primeng/menu';

import { NavBarComponent } from './nav-bar/nav-bar.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    CommonModule,
    TieredMenuModule,
    BrowserModule,
    BrowserAnimationsModule,
    MenubarModule,
    ButtonModule,
    MenuModule
  ],
  declarations: [NavBarComponent],
  exports: [
    NavBarComponent
  ]
})
export class NavigationModule { }
