import { Component } from '@angular/core';

@Component({
  selector: 'my-app',  // directive <my-app>
  moduleId: module.id,
  templateUrl: 'app.component.html'
})
export class AppComponent  { 
  // Properties
  name = 'Angular'; 
  image = 'favicon.ico';
  color = 'red';

  // Methods
  clicked(){
    // We will use a ternary if: condición ? expr1 : expr2 
    this.color = this.color === 'red' ? 'blue' : 'red';
  }

  colorChange(color: string){
    this.color = color;
  }
}
