import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Contact} from '../../app/model/contact';

/*
  Generated class for the ContactProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ContactProvider {

  public contacts: Contact[] = [];
  private index: number = 6;

  removeByAttr(attr, value){
    console.log(attr, value);
    var i = this.contacts.length;
    console.log('length', i);
    while(i--){
       if( this.contacts[i]
           && this.contacts[i].hasOwnProperty(attr)
           && (arguments.length > 1 && this.contacts[i][attr] === value ) ){
           this.contacts.splice(i,1);
       }
    }
    return this.contacts;
  }

  addContact(contact){
    this.contacts.push(contact);
    contact.setId(this.index);
    this.index++;
    this.contacts.sort()
  }

  getContacts(){
    return this.contacts;
  }

  constructor() {
    let contact1: Contact = (new Contact("Agustin Vignolo", "2218765432", "2214567854", "agus@mimail.com", "Amigo"));
    let contact2: Contact = (new Contact("Ramiro Cortes", "2216574893", "2216574894", "rami@mimail.com", "Familiar"));
    let contact3: Contact = (new Contact("Rodrigo Pait", "2216574895", "2216574896", "pai@mimail.com", "Comercial"));
    let contact4: Contact = (new Contact("Federica Delgado", "2216574897", "2216574898", "fede@mimail.com", "Amigo"));
    let contact5: Contact = (new Contact("Agustin De Luca", "2216574899", "2216574890", "agus@mimail.com", "Familiar"));
    contact1.setId(1);
    contact2.setId(2);
    contact3.setId(3);
    contact4.setId(4);
    contact5.setId(5);
    this.contacts.push(contact1, contact2, contact3, contact4, contact5);
    this.contacts = this.contacts.sort();
  }

}
