import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

import { Hero } from './model';

@Component({
  moduleId: module.id,
  selector: 'hero-list',
  templateUrl: 'hero-list.component.html'
})
export class HeroListComponent implements OnInit{
  @Input() heroes: Hero[];
  hero: Hero;
  @Output() heroClicked: EventEmitter<Hero> = new EventEmitter<Hero>();

  ngOnInit():void{
  }

  changeHero(heroTmp: Hero):void {
    this.hero = heroTmp;
    this.heroClicked.emit(heroTmp);
  }
}
