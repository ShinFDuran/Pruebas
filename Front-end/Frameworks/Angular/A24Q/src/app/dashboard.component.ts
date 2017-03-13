// Imports de Angular
import { Component, OnInit } from '@angular/core';

// Imports de nuestra app
import { Heroe } from './app.heroe.model';
import { HeroService } from './hero.service';


@Component({
  moduleId: module.id,
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent  implements OnInit {
  // Propiedades
  heroes: Heroe[];

  // Para poder usar un servicio hay que inyectarlo en el constructor
  constructor(private heroService: HeroService){
  }

  // Métodos del ciclo de vida.  Inicialización de variables
  ngOnInit(): void {
    // Tomamos sólo 4 héroes
    this.heroService.getHeroes().then(heroes => this.heroes = heroes.slice(1, 5));
  }
}
