import { Component, Input } from '@angular/core';

import { Address } from './model';

@Component({
  moduleId: module.id,
  selector: 'address-comp',
  templateUrl: 'address.component.html'
})

export class AddressComponent{
  @Input() address: Address;
  regions: string[];
  states: string[];

  constructor(){
    this.regions = ['north', 'south', 'west', 'east'];
    this.states = ['Chicago','New York','Alaska','Jalisco'];

  }

}