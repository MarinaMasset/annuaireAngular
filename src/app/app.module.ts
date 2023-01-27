import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { CardComponent } from './card/card.component';
import { CardInfoComponent } from './card-info/card-info.component';
import { CardListComponent } from './card-list/card-list.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import {RouterModule } from '@angular/router';
import {Router} from './router';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AddContactComponent,
    CardComponent,
    CardInfoComponent,
    CardListComponent,
    FooterComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule, RouterModule, Router, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
