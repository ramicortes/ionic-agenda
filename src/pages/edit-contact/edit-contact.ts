import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Contact} from '../../app/model/contact';
import {ContactProvider} from '../../providers/contact/contact';

/**
 * Generated class for the EditContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-contact',
  templateUrl: 'edit-contact.html',
})
export class EditContactPage {

  types: string[] = ["Familiar", "Comercial", "Amigo", "Otro"];
  contact: Contact = null;
  name:string="";
  firstNumber:string="";
  altNumber:string="";
  email:string="";
  type:string="";

  constructor(public navCtrl: NavController, public navParams: NavParams, private contactProvider: ContactProvider) {
    this.contact = this.navParams.get('contact');
    this.name=this.contact.getName();
    this.firstNumber=this.contact.getFirstNumber();
    this.altNumber=this.contact.getAltNumber();
    this.email=this.contact.getEmail();
    this.type=this.contact.getContactType();
  }

  editContact() {
    this.contact.setName(this.name);
    this.contact.setFirstNumber(this.firstNumber);
    this.contact.setAltNumber(this.altNumber);
    this.contact.setEmail(this.email);
    this.contact.setContactType(this.type);
    this.navCtrl.pop();
  }

  deleteContact(){
    this.contactProvider.removeByAttr('id', this.contact.getId());
    this.navCtrl.pop();
  }

}
