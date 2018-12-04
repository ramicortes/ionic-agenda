import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Contact} from '../../app/model/contact';
import {ContactProvider} from '../contact/contact';


/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {

  contacts: Contact[];

  constructor(private contactProvider: ContactProvider) {
    this.contacts = this.contactProvider.getContacts();
  }

  filterItems(searchTerm){
    return this.contacts.filter((contact) => {
        return contact.toString().toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }

}
