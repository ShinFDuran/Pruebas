// Necesitamos importar otros módulos de Angular
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// Para poder usar la directiva ngModel necesitamos FormsModule
import { FormsModule } from '@angular/forms';
// Enrutado
import { RouterModule }   from '@angular/router';

// Componentes
import { AppComponent }  from './app.component';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';
import { DashboardComponent } from './dashboard.component';



@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    // Importamos el módulo de rutas y las implementamos
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
      {
        path: 'heroes',
        component: HeroesComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'detail/:id',
        component: HeroDetailComponent
      }
    ])
   ],
  // Los componentes que tengan unas directivas hay que declararlos
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent ],
  // Los servicios hay que agregarlos en providers
  providers: [
    HeroService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
