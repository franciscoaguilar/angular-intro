import { Component, OnInit } from '@angular/core';

import { Contact } from '../models/contact';
import { ContactInterface } from '../interfaces/contact-interface';
import { CONTACTS } from '../mocks/mock-contacts';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contacts: ContactInterface[];
  editedContact: ContactInterface;

  constructor() { }

  getContacts(filter: String ){
    if (filter === 'all')  { this.contacts = CONTACTS; } else{
    let filteredContacts = [];
    const contacts: any = CONTACTS;
    contacts.find((contact) => {
      if(contact.tags.includes(filter)) {
        filteredContacts.push(contact);
      }
    });
    this.contacts = filteredContacts;
  }
}
getEditedContact(contact){
this.editedContact = contact;
}

  ngOnInit() {
    this.getContacts('all');
  }

}
