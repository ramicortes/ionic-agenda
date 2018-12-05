import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {FormControl} from '@angular/forms';
import {NewContactPage} from '../new-contact/new-contact';
import {EditContactPage} from '../edit-contact/edit-contact';
import {SettingsPage} from '../settings/settings';
import {Contact} from '../../app/model/contact';
import {ContactProvider} from '../../providers/contact/contact';
import {DataProvider} from '../../providers/data/data';
import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  contacts: Contact[];
  searchInput:string="";
  shouldShowCancel:boolean=true;
  searchControl: FormControl;
  searching: boolean = false;

  constructor(public navCtrl: NavController, private contactProvider: ContactProvider, private dataProvider: DataProvider) {
    this.searchControl = new FormControl();
  }

  ionViewWillEnter() {
    this.filterContacts();

    this.searchControl.valueChanges.debounceTime(700).subscribe(search => {
        this.searching = false;
        this.filterContacts();
    });
  }

  addContact(){
    this.navCtrl.push(NewContactPage);
  }

  onSearchInput(){
        this.searching = true;
    }

  editContact(contact: Contact){
    this.navCtrl.push(EditContactPage, {contact: contact });
  }

  openSettings(){
    this.navCtrl.push(SettingsPage);
  }

  printContacts(){
    console.log(this.contactProvider.getContacts());
  }

  filterContacts() {
    this.contacts = this.dataProvider.filterItems(this.searchInput);
  }

}
