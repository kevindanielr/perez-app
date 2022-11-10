import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';

import {AppMainComponent} from './shared/app.main.component';
import {AppNotfoundComponent} from './pages/app.notfound.component';
import { ProductsComponent } from './pages/products/products.component';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';
import { UsuarioAuthGuard } from './guard/usuario-auth.guard';
import { AppLoginComponent } from './pages/login/app.login.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '',
                redirectTo: '/login',
                pathMatch: 'full'
            },
            {
                path: '', 
                component: AppMainComponent,
                canActivate: [UsuarioAuthGuard],
                children: [
                    {
                        path: '', 
                        component: ProductsComponent,
                        canActivate: [UsuarioAuthGuard]
                    },
                    {
                        path: 'products', 
                        component: ProductsComponent,
                        canActivate: [UsuarioAuthGuard
                        ],
                    },
                    {
                        path: 'shopping-cart', 
                        component: ShoppingCartComponent,
                        canActivate: [UsuarioAuthGuard],
                    },
                ]
            },
            {path: 'notfound', component: AppNotfoundComponent},
            { path: 'login', component: AppLoginComponent },
            {path: '**', redirectTo: '/notfound'},
        ], {scrollPositionRestoration: 'enabled'})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
