import { Component, OnInit, Input } from '@angular/core';

// Imports de nuestra app
import { Heroe } from './app.heroe.model';

@Component({
  moduleId: module.id,
  selector: 'my-hero-detail',
  template: `
  <div *ngIf="heroe">
    <h2>Detalles de {{heroe.name}}</h2>
    <div><label>id: </label>{{heroe.id}}</div>
    <div>
      <label>Nombre: </label>
      <input [(ngModel)]="heroe.name" placeholder="Nombre héroe">
    </div>
  </div>
  `
})
export class HeroDetailComponent implements OnInit {
  @Input() heroe: Heroe;
  constructor() { }

  ngOnInit() { }
}
