// Necesitamos importar otros módulos de Angular
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// Para poder usar la directiva ngModel necesitamos FormsModule
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule
   ],
  // Los componentes que tengan unas directivas hay que declararlos
  declarations: [ AppComponent, HeroDetailComponent ],
  // Los servicios hay que agregarlos en providers
  providers: [
    HeroService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
