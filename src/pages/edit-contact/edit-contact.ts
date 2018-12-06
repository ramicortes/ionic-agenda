import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Contact} from '../../app/model/contact';
import {ContactProvider} from '../../providers/contact/contact';
import { ToastController } from 'ionic-angular';


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

  //VARIABLES
  types: string[] = ["Familiar", "Comercial", "Amigo", "Otro"];
  contact: Contact = null;
  name:string="";
  firstNumber:string="";
  altNumber:string="";
  email:string="";
  type:string="";

  constructor(public navCtrl: NavController, public navParams: NavParams, private contactProvider: ContactProvider, private alertCtrl: AlertController, private toastCtrl: ToastController) {
    this.contact = this.navParams.get('contact');
    this.name=this.contact.getName();
    this.firstNumber=this.contact.getFirstNumber();
    this.altNumber=this.contact.getAltNumber();
    this.email=this.contact.getEmail();
    this.type=this.contact.getContactType();
  }

  editContact() {
    if(!this.checkMandatoryFields()){
      this.presentMandatoryFieldToast();
      return;
    }
    this.contact.setName(this.name);
    this.contact.setFirstNumber(this.firstNumber);
    this.contact.setAltNumber(this.altNumber);
    this.contact.setEmail(this.email);
    this.contact.setContactType(this.type);
    this.presentSuccessToast();
    this.navCtrl.pop();
  }

  deleteContact(){
    this.contactProvider.removeByAttr('id', this.contact.getId());
    this.presentDeletedContactToast();
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
      message: 'Usuario editado con exito',
      duration: 3000,
      position: 'bottom',
      cssClass: 'green'
    });
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

  presentDeletedContactToast() {
    let toast = this.toastCtrl.create({
      message: 'Usuario eliminado con exito',
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
  deleteContactConfirmation() {
    let alert = this.alertCtrl.create({
      title: 'Eliminar Contacto',
      message: 'Desea eliminar este contacto?',
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
            this.deleteContact();
          }
        }
      ]
    });
    alert.present();
  }

  editContactConfirmation() {
    let alert = this.alertCtrl.create({
      title: 'Editar Contacto',
      message: 'Desea confirmar la edición?',
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
            this.editContact();
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
