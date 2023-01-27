import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactModel } from '../model/contact.model';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss']
})
export class AddContactComponent {

  addContactForm : FormGroup;

  constructor(private fb: FormBuilder) { 
 
  this.addContactForm = this.fb.group({
    firstname: ['',[Validators.required]],
    lastname: ['',[Validators.required]],
    photo: ['',[Validators.required]],
    typeContact: ['',[Validators.required]],
    tel:['', [Validators.pattern("((\\+|00)33|0) *[1-9]([ .-]*[0-9]{2}){4}")]]
  });
}

onSubmit():void {
  const contactData = this.addContactForm.value;
  const contact = new ContactModel();
  contact.id=9;
  contact.firstname= contactData["firstname"];
  contact.lastname= contactData["lastname"];
  contact.photo= contactData["photo"];
  contact.typeContact= contactData["typeContact"];
  contact.tel= contactData["tel"];
}
}
