import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { HeroListComponent } from './hero-list.component';
import { HeroDetailsComponent } from './hero-details.component';
import { AddressComponent } from './address.component';
import { DataService } from './data.service';
import { LoggerService } from './logger.service';

@NgModule({
  // Modules that we need to import
  imports:      [ BrowserModule, FormsModule ],
  // Classes that we want to be accesible to all the AppModule: directives,...
  declarations: [
    AppComponent,
    HeroListComponent,
    HeroDetailsComponent,
    AddressComponent ],
  // Start point of the App
  bootstrap:    [ AppComponent ],
  // Services avaibles for the components
  providers: [
    DataService,
    LoggerService
  ]
})

// No code.  The important thing of this class is the metadata
export class AppModule { }
