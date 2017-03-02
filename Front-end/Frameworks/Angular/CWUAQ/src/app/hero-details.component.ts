import { Component, Input } from '@angular/core';

import { Hero } from './model';

@Component({
  moduleId: module.id,
  selector: 'hero-details',
  templateUrl: 'hero-details.component.html'
})
export class HeroDetailsComponent {
  @Input() hero: Hero;
  showAdress: boolean;

  constructor(){
    this.showAdress = false;
  }
}