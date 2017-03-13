// Imports de Angular
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Imports de nuestra app
import { Heroe } from './app.heroe.model';
import { HeroService } from './hero.service';

@Component({
  moduleId: module.id,
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent  implements OnInit {
  // Propiedades
  heroeSeleccionado: Heroe;
  heroes: Heroe[];

  // Para poder usar un servicio hay que inyectarlo en el constructor
  constructor(
    private heroService: HeroService,
    private router: Router){
  }

  // Métodos del ciclo de vida.  Inicialización de variables
  ngOnInit(): void {
    // this.heroes = this.heroService.getHeroes(); // Carga síncrona
    // Carga asíncrona con promesas
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  // Métodos
  onSelect(heroe: Heroe): void {
    this.heroeSeleccionado = heroe;
  }
  gotoDetail():void {
    this.router.navigate(['/detail', this.heroeSeleccionado.id]);
  }
}
