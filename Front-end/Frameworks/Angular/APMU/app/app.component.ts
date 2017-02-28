// Angular 2 Component Structure 
// Imports of the needed modules
import { Component } from '@angular/core';

// Decorator with the data needed for the component (metadata)
@Component({
    // selector: Directive in html
    selector: 'pm-app',
    // View layout of the component. Can be a link to a external html
    template: `       
        <div>
            <nav class="navbar navbar-default">
                <div class="container-fluid">
                    <a class="navbar-brand">{{pageTitle}}</a>
                    <ul class="nav navbar-nav">
                        <li> <a [routerLink]="['/welcome']">Home</a></li>
                        <li> <a [routerLink]="['/products']">Product List</a></li>
                    </ul>
                </div>
            </nav>
            <div class="container">
                <router-outlet></router-outlet>
            </div>
        </div>
    `
})

// Class with the data (properties) and logic (methods) of the component
export class AppComponent {
    pageTitle: string = 'Acme Product Manager';
}
