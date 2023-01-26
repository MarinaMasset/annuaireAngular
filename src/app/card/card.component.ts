import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactModel } from "../model/contact.model";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit{
  @Input()card!:ContactModel;

  constructor(private route : Router) {}

ngOnInit(): void {

}

navigateById(){
  this.route.navigateByUrl("detail/"+this.card.id)
}

}
