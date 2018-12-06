import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { IonicPage, NavController } from 'ionic-angular';
import {Contact} from '../../app/model/contact';
import {ContactProvider} from '../../providers/contact/contact';
import { ToastController } from 'ionic-angular';

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

  //VARIABLES
  types: string[] = ["Familiar", "Comercial", "Amigo", "Otro"];
  name:string="";
  firstNumber:string="";
  altNumber:string="";
  email:string="";
  type:string="";

  constructor(public navCtrl: NavController, private contactProvider: ContactProvider, private alertCtrl: AlertController, private toastCtrl: ToastController) {
  }

  addContact() {
    if(!this.checkMandatoryFields()){
      this.presentMandatoryFieldToast();
      return;
    }
    let contact: Contact = (new Contact(this.name, this.firstNumber, this.altNumber, this.email, this.type));
    this.contactProvider.addContact(contact);
    this.presentSuccessToast();
    this.navCtrl.pop();
  }

  //TOASTS
  presentMandatoryFieldToast() {
    let toast = this.toastCtrl.create({
      message: 'Campos obligatorios sin completar',
      duration: 3000,
      position: 'bottom',
      cssClass: 'red'
    });
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

  presentSuccessToast() {
    let toast = this.toastCtrl.create({
      message: 'Usuario agregado con exito',
      duration: 3000,
      position: 'bottom',
      cssClass: 'green'
    });
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

  //ALERTS
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

  //AUX FUNCTIONS
  checkMandatoryFields(){
    return ((this.name != "")&&(this.firstNumber != "")&&(this.type != ""))
  }

}
