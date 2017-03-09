// Imports de Angular
import { Component, OnInit } from '@angular/core';

// Imports de nuestra app
import { Heroe } from './app.heroe.model';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  template: `
  <h1>{{titulo}}</h1>
  <h2>Detalles de {{heroe.name}}</h2>
  <div><label>id: </label>{{heroe.id}}</div>
  <div>
    <label>Nombre: </label>
    <input [(ngModel)]="heroe.name" placeholder="Nombre héroe">
  </div>
  <h2>Mis Héroes</h2>
  <ul class="heroes">
    <li *ngFor="let heroe of HEROES">
      <span class="badge">{{heroe.id}}</span> {{heroe.name}}
    </li>
  </ul>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  titulo: string;
  heroe: Heroe;

  ngOnInit(){
    this.titulo = 'Tour de Héroes';
    this.heroe = this.HEROES[0];
  }

  // Listado manual de Héroes
  const HEROES: Hero[] = [
      { id: 11, name: 'Mr. Nice' },
      { id: 12, name: 'Narco' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' }
    ];

}
