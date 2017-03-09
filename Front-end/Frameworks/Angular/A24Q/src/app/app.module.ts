// Necesitamos importar otros módulos de Angular
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// Para poder usar la directiva ngModel necesitamos FormsModule
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { HeroDetailComponent } from './hero-detail.component';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule
   ],
  declarations: [ AppComponent, HeroDetailComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
