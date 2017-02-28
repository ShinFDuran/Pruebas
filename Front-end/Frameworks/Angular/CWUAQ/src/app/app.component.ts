import { Component } from '@angular/core';

@Component({
  selector: 'my-app',  // directive <my-app>
  template: `<h1>Hello {{name}}</h1>`,
})
export class AppComponent  { 
  // Properties
  name = 'Angular'; 
}
