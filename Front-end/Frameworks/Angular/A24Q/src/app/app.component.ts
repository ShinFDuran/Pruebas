// Imports de Angular
import { Component, OnInit } from '@angular/core';

// Imports de nuestra app
import { Heroe } from './app.heroe.model';

@Component({
  selector: 'my-app',
  template: `
  <h1>{{titulo}}</h1>
  <h2>Detalles de {{heroe.name}}</h2>
  <div><label>id: </label>{{heroe.id}}</div>
  <div>
    <label>Nombre: </label>
    <input [(ngModel)]="heroe.name" placeholder="Nombre héroe">
  </div>
  `,
})
export class AppComponent  implements OnInit {
  titulo: string;
  heroe: Heroe;

  ngOnInit(){
    this.titulo = 'Tour de Héroes';
    this.heroe = new Heroe(1,'Shadow');
  }

}
