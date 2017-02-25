// Angular 2 Component Structure 
// Imports of the needed modules
import { Component } from '@angular/core';

// Decorator with the data needed for the component (metadata)
@Component({
    // selector: Directive in html
    selector: 'pm-app',
    // View layout of the component. Can be a link to a external html
    template: `
        <div><h1>{{pageTitle}}</h1>
            <h2>My first component</h2>
        </div>
    `
})

// Class with the data (properties) and logic (methods) of the component
export class AppComponent {
    pageTitle: string = 'Acme Product Manager';
}
