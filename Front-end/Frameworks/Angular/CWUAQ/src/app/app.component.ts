import { Component } from '@angular/core';

import { Hero } from './model';

@Component({
  selector: 'my-app',  // directive <my-app>
  moduleId: module.id,
  templateUrl: 'app.component.html'
})

export class AppComponent  { 
  // Properties
  pageTitle: string = 'Hero Quickstart';
  pageDescription: string;
  hideAdress: boolean;
  regions: string[];
  states: string[];
  heroes: Hero[];
  hero: Hero;

  // Constructor.  Properties initialization
  constructor(){
    this.pageTitle = 'Hero Quickstart';
    this.pageDescription = 'Example web page using Angular Quickstart';
    this.hideAdress = true;
    this.regions = ['north', 'south', 'west', 'east'];
    this.states = ['Chicago','New York','Alaska','Jalisco'];
    this.heroes = [{
      id: 1,
      name: 'Batman',
      address: {
        street: 'Wayne Manor',
        city: 'Gotham',
        state: 'Chicago',
        region: 'west'
      }
    },{
      id: 2,
      name: 'Spiderman',
      address: {
        street: 'Daily Bugle',
        city: 'New York',
        state: 'New York',
        region: 'east'
      }
    },{
      id: 3,
      name: 'Superman',
      address: {
        street: 'Daily Planet',
        city: 'Metropolis',
        state: 'Alaska',
        region: 'north'
      }
    }];
  }
}
