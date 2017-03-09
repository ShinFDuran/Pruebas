// Imports de Angular
import { Component, OnInit } from '@angular/core';

// Imports de nuestra app
import { Heroe } from './app.heroe.model';
import { HeroService } from './hero.service';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  template: `
  <h1>{{titulo}}</h1>
  <h2>Mis Héroes</h2>
  <ul class="heroes">
    <li
      *ngFor="let heroe of heroes"
      (click)="onSelect(heroe)"
      [class.selected]="heroe === heroeSeleccionado">
        <span class="badge">{{heroe.id}}</span> {{heroe.name}}
    </li>
  </ul>
  <my-hero-detail [heroe]="heroeSeleccionado"></my-hero-detail>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  // Propiedades
  titulo: string;
  heroeSeleccionado: Heroe;
  heroes: Heroe[];

  // Para poder usar un servicio hay que inyectarlo en el constructor
  constructor(private heroService: HeroService){
  }

  // Métodos del ciclo de vida.  Inicialización de variables
  ngOnInit(): void {
    this.titulo = 'Tour de Héroes';
    this.heroes = this.heroService.getHeroes();
  }

  // Métodos
  onSelect(heroe: Heroe): void {
    this.heroeSeleccionado = heroe;
  }
}
