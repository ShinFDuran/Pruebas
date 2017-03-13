import { Component, OnInit, Input } from '@angular/core';
// Necesitamos importan unas de clases para poder usar los parámetros de la url
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';

// Imports de nuestra app
import { Heroe } from './app.heroe.model';
// Necesitamos el array de héroes para mostrar los detalles de uno
import { HeroService } from './hero.service';

@Component({
  moduleId: module.id,
  selector: 'my-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: [ './hero-detail.component.css' ]
})
export class HeroDetailComponent implements OnInit {
  @Input() heroe: Heroe;
  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    // Obtenemos la id del observable params de la ruta (route)
    this.route.params
    // Los parámetros de la ruta son strings, lo convertímos a número con '+'
      .switchMap((params: Params) => this.heroService.getHero(+params['id']))
      .subscribe(hero => this.heroe = hero);
  }

  // El botón lo que hace es cargar la página anterior
  goBack(): void {
    this.location.back();
  }
}
