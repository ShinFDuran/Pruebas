import { Component } from '@angular/core';

import { Customer } from './model';

@Component({
  selector: 'my-app',  // directive <my-app>
  moduleId: module.id,
  templateUrl: 'app.component.html'
})
export class AppComponent  { 
  // Properties
  pageTitle: string = 'Code Quickstart';
  pageDescription: string = 'Example web page using Angular Quickstart';
  hideAdress: boolean = true;
  customer: Customer = {
    id: 1,
    name: 'Batman',
    address: {
      street: 'Falsa 123',
      city: 'Gotham',
      state: 'Chicago',
      region: 'West'
    }
  };
}
