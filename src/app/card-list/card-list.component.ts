import { Component, Input, OnInit } from '@angular/core';
import { ContactModel } from "../model/contact.model";
import { Service } from '../services/service';


@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent {
 
@Input() contacts!:ContactModel[];
constructor(private service: Service) {}

  ngOnInit(): void {
    this.contacts = this.service.getContacts();
    }
}


