// Imports de Angular
import { Component, OnInit } from '@angular/core';

// Imports de nuestra app
import { Heroe } from './app.heroe.model';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  template: `
  <h1>{{titulo}}</h1>
  <h2>Mis Héroes</h2>
  <ul class="heroes">
    <li
      *ngFor="let heroe of HEROES"
      (click)="onSelect(heroe)"
      [class.selected]="heroe === heroeSeleccionado">
        <span class="badge">{{heroe.id}}</span> {{heroe.name}}
    </li>
  </ul>
  <div *ngIf="heroeSeleccionado">
    <h2>Detalles de {{heroeSeleccionado.name}}</h2>
    <div><label>id: </label>{{heroeSeleccionado.id}}</div>
    <div>
      <label>Nombre: </label>
      <input [(ngModel)]="heroeSeleccionado.name" placeholder="Nombre héroe">
    </div>
  </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  // Propiedades
  titulo: string;
  heroeSeleccionado: Heroe;

  // Métodos del ciclo de vida
  ngOnInit(){
    this.titulo = 'Tour de Héroes';
  }

  // Métodos
  onSelect(heroe: Heroe): void {
    this.heroeSeleccionado = heroe;
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
