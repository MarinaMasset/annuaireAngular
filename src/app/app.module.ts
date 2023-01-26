import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CardListComponent } from './card-list/card-list.component';
import { CardInfoComponent } from './card-info/card-info.component';
import {RouterModule } from '@angular/router';
import {Router} from './router'

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    HeaderComponent,
    FooterComponent,
    CardListComponent,
    CardInfoComponent
  ],
  imports: [
    BrowserModule, RouterModule, Router
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
