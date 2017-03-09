import { Injectable } from '@angular/core';

// Necesitamos importar por un lado el modelo de Heroe
import { Heroe } from './app.heroe.model';
// Y por otro el array de heroes
import { HEROES } from './mock-heroes';

// Usamos @Injectable para generar un servicio
@Injectable()
export class HeroService {
  // Este servicio devolverá inicialmente los héroes del archivo mock-heroes
  // Lo adaptamos para que devuelva una promesa para carga asíncrona
  getHeroes(): Promise<Heroe[]> {
    return Promise.resolve(HEROES);
  }

  // Simulación de una red con latencia
  getHeroesSlowly(): Promise<Heroe[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getHeroes()), 2000);
    });
  }

  getHero(id: number): Promise<Heroe> {
  return this.getHeroes()
             .then(heroes => heroes.find(hero => hero.id === id));
  }
}
