import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Contact} from '../../app/model/contact';
import {ContactProvider} from '../../providers/contact/contact';

/**
 * Generated class for the NewContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new-contact',
  templateUrl: 'new-contact.html',
})
export class NewContactPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private contactProvider: ContactProvider) {
  }

  addContact() {
    let contact: Contact = (new Contact(this.name, this.firstNumber, this.altNumber, this.email, this.type));
    console.log(contact);
    this.contactProvider.addContact(contact);
    this.navCtrl.pop();
  }

  types: string[] = ["Familiar", "Comercial", "Amigo", "Otro"];
  name:string="";
  firstNumber:string="";
  altNumber:string="";
  email:string="";
  type:string="";

}
