import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  template: `
    <h1>{{titulo}}</h1>
    <nav>
      <a routerLink="/dashboard" routerLinkActive="active">Tablero</a>
      <a routerLink="/heroes" routerLinkActive="active">Héroes</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  implements OnInit {
  // Propiedades
  titulo: string;

  // Métodos del ciclo de vida.  Inicialización de variables
  ngOnInit(): void {
    this.titulo = 'Tour de Héroes';
  }
}
