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
          photo:"magalie.png",
          firstname:"Magalie",
          lastname:"Cardonet",
          age:31,
          address:"45, avenue de Neuilly, 59000 Lille",
          tel:"0678990878",
          typeContact:"fournisseur"
      },
  
      {
          id: 2,
          photo:"david.png",
          firstname:"David",
          lastname:"Legrand",
          age:30,
          address:"105, avenue des Lilas, 59000 Lille",
          tel:"0678990890",
          typeContact:"client"
      },
  
      {
          id: 3,
          photo:"herve.png",
          firstname:"Hervé",
          lastname:"Beaumont",
          age:40,
          address:"12, avenue du général, 59000 Lille",
          tel:"0678990845",
          typeContact:"client"
      },
      {
        id:4,
        photo:"alicia.png",
        firstname:"Alicia",
        lastname:"Kaas",
        age:27,
        address:"36, rue Solférino, 59000 Lille",
        tel:"0678990830",
        typeContact:"fournisseur"
    },
    {
        id: 5,
        photo:"magalie.png",
        firstname:"Sophie",
        lastname:"Bichon",
        age:31,
        address:"48, avenue de Neuilly, 59000 Lille",
        tel:"0678990458",
        typeContact:"fournisseur"
    },

    {
        id: 6,
        photo:"david.png",
        firstname:"Goliath",
        lastname:"Legrand",
        age:35,
        address:"114, avenue des Lilas, 59000 Lille",
        tel:"0678994590",
        typeContact:"client"
    },

    {
        id: 7,
        photo:"herve.png",
        firstname:"Maxime",
        lastname:"Beaugrand",
        age:46,
        address:"13, avenue du général, 59000 Lille",
        tel:"0678990877",
        typeContact:"client"
    },
    {
      id:8,
      photo:"alicia.png",
      firstname:"Alice",
      lastname:"Fournier",
      age:25,
      address:"45, rue Solférino, 59000 Lille",
      tel:"0678990810",
      typeContact:"fournisseur"
  }
  ]

    getContacts() : ContactModel[] {
        return this.contacts;
    }
    
    getContactById(id:number) : ContactModel {
        const contact = this.contacts.find(x => x.id == id);
        if(!contact) {
            throw new Error("Aucun contact n'a été trouvé dans la base.");
        }
        return contact;
    } 
}