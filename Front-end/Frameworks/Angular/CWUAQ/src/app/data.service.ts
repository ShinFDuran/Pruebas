import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

import { Hero } from './model';
import { createTestHeroes } from './test-data';

@Injectable()
export class DataService {
  constructor(private logService: LoggerService){}
  // Method of the service that give us an array of heroes
  getHeroes(): Hero[]{
    let _heroesTmp = createTestHeroes()
    console.log(_heroesTmp.length + ' heroes');
    // Initially we are going to return the hardcode data
    return _heroesTmp;
  }
}
