import { Injectable } from '@angular/core';

// Necesitamos importar por un lado el modelo de Heroe
import { Heroe } from './app.heroe.model';
// Y por otro el array de heroes
import { HEROES } from './mock-heroes';

// Usamos @Injectable para generar un servicio
@Injectable()
export class HeroService {
  // Este servicio devolverá inicialmente los héroes del archivo mock-heroes
  getHeroes(): Heroe[] {
    return HEROES;
  }
}
