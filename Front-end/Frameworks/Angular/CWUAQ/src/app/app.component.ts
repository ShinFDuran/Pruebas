import { Component } from '@angular/core';

@Component({
  selector: 'my-app',  // directive <my-app>
  moduleId: module.id,
  templateUrl: 'app.component.html'
})
export class AppComponent  { 
  // Properties
  name: string = 'Batman'; 
  street: string = 'Falsa';
  city: string = 'Gotham';
  region: string = 'DC Region';
  hideAdress: boolean = false;

  // Methods
  addressClick(){
    this.hideAdress = !this.hideAdress;
  }

  regionChange(newRegion: string){
    this.region = newRegion;
  }
}
