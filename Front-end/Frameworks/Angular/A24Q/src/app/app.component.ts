import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{titulo}}</h1>
    <nav>
      <a routerLink="/dashboard">Tablero</a>
      <a routerLink="/heroes">Héroes</a>
    </nav>
    <router-outlet></router-outlet>
  `
})
export class AppComponent  implements OnInit {
  // Propiedades
  titulo: string;

  // Métodos del ciclo de vida.  Inicialización de variables
  ngOnInit(): void {
    this.titulo = 'Tour de Héroes';
  }
}
