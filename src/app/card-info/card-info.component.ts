import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactModel } from "../model/contact.model";
import { Service } from '../services/service';


@Component({
  selector: 'app-card-info',
  templateUrl: './card-info.component.html',
  styleUrls: ['./card-info.component.scss']
})
export class CardInfoComponent implements OnInit {
  @Input()card!:ContactModel;

  constructor(private service : Service, private routeId: ActivatedRoute) {};
  
  ngOnInit(): void {
    const id = this.routeId.snapshot.params['id'];
    this.card = this.service.getContactById(id);
  }
}
