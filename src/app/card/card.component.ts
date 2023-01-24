import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit{
  image!:String
  name!:String
  firstname!:String
  age!:number
  address!:String
  tel!:String
  typeContract!:String

ngOnInit(): void {
  this.image="magalie.png"
  this.age=31;
  this.address="45, avenue de Neuilly, 59000 Lille"
  this.tel="0678990878"
  this.typeContract="fournisseur"
}



}
