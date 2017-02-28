import { Component } from '@angular/core';

@Component({
  selector: 'my-app',  // directive <my-app>
  moduleId: module.id,
  templateUrl: 'app.component.html'
})
export class AppComponent  { 
  // Properties
  pageTitle: string = 'Code Quickstart';
  pageDescription: string = 'Example web page using Angular Quickstart';
  name: string = 'Batman'; 
  street: string = 'Falsa 123';
  city: string = 'Gotham';
  region: string = 'DC';
  hideAdress: boolean = true;
}
