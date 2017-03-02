import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Hero } from './model';

@Component({
  moduleId: module.id,
  selector: 'hero-list',
  templateUrl: 'hero-list.component.html'
})
export class HeroListComponent {
  @Input() heroes: Hero[];
  hero: Hero;
  @Output() heroClicked: EventEmitter<Hero> = new EventEmitter<Hero>();
  changeHero(heroTmp: Hero):void {
    this.hero = heroTmp;
    this.heroClicked.emit(heroTmp);
  }
}