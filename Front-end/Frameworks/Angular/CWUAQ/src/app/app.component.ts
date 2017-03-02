import { Component, OnInit } from '@angular/core';

import { Hero } from './model';
import { DataService } from './data.service';
import { LoggerService } from './logger.service';

@Component({
  selector: 'my-app',  // directive <my-app>
  moduleId: module.id,
  templateUrl: 'app.component.html'
})

export class AppComponent implements OnInit {
  // Properties
  pageTitle: string = 'Hero Quickstart';
  pageDescription: string;
  heroes: Hero[];
  hero: Hero;

  // Constructor.  Properties initialization
  // We need to get access to the service injecting it in the constructor
  // We are using the TypeScript shorhand to declare it
  // _heroes is avaible in all the component
  constructor(
    private dataService: DataService,
    private logService: LoggerService){}

  ngOnInit(){
    this.pageTitle = 'Hero Quickstart';
    this.pageDescription = 'Example web page using Angular Quickstart';
    this.logService.log('Getting heroes ..');
    this.heroes = this.dataService.getHeroes();
  }

  // Methods
  changeHero(heroTmp: Hero):void {
    this.hero = heroTmp;
  }
}
