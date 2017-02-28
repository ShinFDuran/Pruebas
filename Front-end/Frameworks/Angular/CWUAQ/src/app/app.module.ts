import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';

@NgModule({
  // Modules that we need to import
  imports:      [ BrowserModule, FormsModule ],
  // Classes that we want to be accesible to all the AppModule: directives,...
  declarations: [ AppComponent ],
  // Start point of the App
  bootstrap:    [ AppComponent ]
})

// No code.  The important thing of this class is the metadata
export class AppModule { }
