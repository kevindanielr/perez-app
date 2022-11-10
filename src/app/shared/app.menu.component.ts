import {Component, OnInit} from '@angular/core';
import {AppMainComponent} from './app.main.component';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html',
})
export class AppMenuComponent implements OnInit {

    model: any[];

    constructor(public appMain: AppMainComponent) {}

    ngOnInit() {
        this.model = [
            {label: 'Products', icon: 'pi pi-fw pi-star', routerLink: ['/products']},
            {label: 'Shopping-cart', icon: 'pi pi-fw pi-shopping-cart', routerLink: ['/shopping-cart']},
            {label: 'Profile', icon: 'pi pi-fw pi-user', routerLink: ['/shopping-cart']},
            {label: 'LogIn', icon: 'pi pi-fw pi-lock', routerLink: ['/login']},
        ];
    }
}
