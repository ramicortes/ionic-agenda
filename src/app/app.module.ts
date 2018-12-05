import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { NewContactPage } from '../pages/new-contact/new-contact';
import { EditContactPage } from '../pages/edit-contact/edit-contact';
import { SettingsPage } from '../pages/settings/settings';
import { ContactProvider } from '../providers/contact/contact';
import { ContactTypeProvider } from '../providers/contact-type/contact-type';
import { DataProvider } from '../providers/data/data';
import { SettingsProvider } from '../providers/settings/settings';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    NewContactPage,
    EditContactPage,
    SettingsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    NewContactPage,
    EditContactPage,
    SettingsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ContactProvider,
    ContactTypeProvider,
    DataProvider,
    SettingsProvider
  ]
})
export class AppModule {}
