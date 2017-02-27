// Angular 2 Component Structure 
// Imports of the needed modules
import { Component } from '@angular/core';

import { ProductService } from './products/product.service';

// Decorator with the data needed for the component (metadata)
@Component({
    // selector: Directive in html
    selector: 'pm-app',
    // View layout of the component. Can be a link to a external html
    template: `
        <div><h1>{{pageTitle}}</h1>
            <h2><pm-products></pm-products></h2>
        </div>
    `,
    // We add the services in the providers property
    providers: [ ProductService ]
})

// Class with the data (properties) and logic (methods) of the component
export class AppComponent {
    pageTitle: string = 'Acme Product Manager';
}
