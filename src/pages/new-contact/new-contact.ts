import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';
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

  constructor(public navCtrl: NavController, public navParams: NavParams, private contactProvider: ContactProvider, private alertCtrl: AlertController) {
  }

  addContact() {
    let contact: Contact = (new Contact(this.name, this.firstNumber, this.altNumber, this.email, this.type));
    console.log(contact);
    this.contactProvider.addContact(contact);
    this.navCtrl.pop();
  }

  addContactConfirmation() {
    let alert = this.alertCtrl.create({
      title: 'Agregar Contacto',
      message: 'Desea agregar este contacto?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancelar',
          handler: () => {
          }
        },
        {
          text: 'Confirmar',
          handler: () => {
            this.addContact();
          }
        }
      ]
    });
    alert.present();
  }


  types: string[] = ["Familiar", "Comercial", "Amigo", "Otro"];
  name:string="";
  firstNumber:string="";
  altNumber:string="";
  email:string="";
  type:string="";

}
