import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CommonModule, HashLocationStrategy, LocationStrategy} from '@angular/common';

import {HttpClientModule} from '@angular/common/http';
import { ngxLoadingAnimationTypes, NgxLoadingModule } from 'ngx-loading';
import { ReactiveFormsModule } from '@angular/forms';

// Routing
import {AppRoutingModule} from './app-routing.module';

// PrimeNG Components
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {DialogModule} from 'primeng/dialog';
import {DropdownModule} from 'primeng/dropdown';
import {InputTextModule} from 'primeng/inputtext';
import {ListboxModule} from 'primeng/listbox';
import {PaginatorModule} from 'primeng/paginator';
import {ScrollTopModule} from 'primeng/scrolltop';

// Shared Components
import {AppComponent} from './app.component';
import {AppMainComponent} from './shared/app.main.component'; 
import {AppMenuComponent} from './shared/app.menu.component';
import {AppMenuitemComponent} from './shared/app.menuitem.component';
import {AppTopBarComponent} from './shared/app.topbar.component';
import {AppFooterComponent} from './shared/app.footer.component';
import {AppNotfoundComponent} from './pages/app.notfound.component';

// Components
import {LoadingComponent} from './components/loading/loading.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { AppLoginComponent } from './pages/login/app.login.component';

// Services
import { MenuService } from './shared/app.menu.service';
import { ConfirmationService, MessageService } from 'primeng/api';


@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        ButtonModule,
        CardModule,
        DialogModule,
        DropdownModule,
        InputTextModule,
        PaginatorModule,
        ScrollTopModule,
        ListboxModule,
        ReactiveFormsModule,
        NgxLoadingModule.forRoot({
            animationType: ngxLoadingAnimationTypes.none,
            backdropBackgroundColour: 'rgba(0,0,0,0.6)',
            fullScreenBackdrop: true
        })
    ],
    declarations: [
        AppComponent,
        AppMainComponent,
        AppMenuComponent,
        AppMenuitemComponent,
        AppTopBarComponent,
        AppFooterComponent,
        AppNotfoundComponent,
        LoadingComponent,
        ProductsComponent,
        ProfileComponent,
        ShoppingCartComponent,
        PaymentComponent,
        AppLoginComponent,
    ],
    providers: [
        {provide: LocationStrategy, useClass: HashLocationStrategy},
        AppMainComponent, MenuService, ConfirmationService, MessageService
    ],
    bootstrap: [AppComponent],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule {
}
