import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/Rx';

/*
  Generated class for the SettingsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SettingsProvider {

  private theme: BehaviorSubject<String>;
  private state: Boolean;

    constructor() {
        this.theme = new BehaviorSubject('light-theme');
        this.state = false;
    }

    setActiveTheme(val) {
        this.theme.next(val);
        this.state = !this.state;
    }

    getActiveTheme() {
        return this.theme.asObservable();
    }

    getActiveState() {
        return this.state;
    }

}
