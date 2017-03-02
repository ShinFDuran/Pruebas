import { Injectable } from '@angular/core';

import { Hero } from './model';
import { createTestHeroes } from './test-data';

@Injectable()
export class DataService {
  // Method of the service that give us an array of heroes
  getHeroes(): Hero[]{
    // Initially we are going to return the hardcode data
    return createTestHeroes();
  }
}
