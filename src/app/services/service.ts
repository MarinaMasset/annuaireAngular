import { Injectable, Input } from "@angular/core";
import { ContactModel } from "src/app/model/contact.model";

@Injectable ({
    providedIn:'root'
})

export class Service {
    
    @Input() contacts : ContactModel[]=
    [
      {
          id: 1,
          image:"magalie.png",
          name:"Magalie",
          firstname:"Cardonet",
          age:31,
          address:"45, avenue de Neuilly, 59000 Lille",
          tel:"0678990878",
          typeContract:"fournisseur"
      },
  
      {
          id: 2,
          image:"david.png",
          name:"David",
          firstname:"Legrand",
          age:30,
          address:"105, avenue des Lilas, 59000 Lille",
          tel:"0678990890",
          typeContract:"client"
      },
  
      {
          id: 3,
          image:"herve.png",
          name:"Hervé",
          firstname:"Beaumont",
          age:40,
          address:"12, avenue du général, 59000 Lille",
          tel:"0678990845",
          typeContract:"client"
      },
      {
        id:4,
        image:"alicia.png",
        name:"Alicia",
        firstname:"Kaas",
        age:27,
        address:"36, rue Solférino, 59000 Lille",
        tel:"0678990830",
        typeContract:"fournisseur"
    }
  ]

    getContacts() : ContactModel[] {
        return this.contacts;
    }

    
    
}