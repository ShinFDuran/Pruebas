import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

// Necesitamos importar por un lado el modelo de Heroe
import { Heroe } from './app.heroe.model';

// Usamos @Injectable para generar un servicio
@Injectable()
export class HeroService {
  private heroesUrl = 'api/heroes';  // URL to web api

  constructor(private http: Http) { }

  getHeroes(): Promise<Heroe[]> {
    return this.http.get(this.heroesUrl)
               .toPromise()
               .then(response => response.json().data as Heroe[])
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  getHero(id: number): Promise<Heroe> {
  return this.getHeroes()
             .then(heroes => heroes.find(hero => hero.id === id));
  }
}
