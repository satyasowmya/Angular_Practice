import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomeModule } from './home/home.module';
import { ListingModule } from './listing/listing.module';
import { SharedModule } from './shared/share.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NotFoundComponent } from './notfound/notfound.component';
import { DetailsComponent } from './details/details.component';
import { PlaceOrderComponent } from './placeOrder/placeOrder.component';
import { ViewOrderComponent } from './view-order/view-order.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';

import { DetailService } from './services/details.service';
import { OrderService } from './services/order.service';
import { LoginFormService } from './services/login.service';
import { RegisterService } from './services/registerForm.service';


//decorator
@NgModule({
     // All the components and pipes
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        NotFoundComponent,
        DetailsComponent,
        PlaceOrderComponent,
        ViewOrderComponent,
        LoginFormComponent,
        RegisterFormComponent
    ],

     // All the modules
    imports: [
        BrowserModule,
        HomeModule,
        ListingModule,
        SharedModule
    ],

     // Only and only main component
    bootstrap: [
        AppComponent
    ],

     // All the services
    providers: [
      DetailService,
      OrderService,
      LoginFormService,
      RegisterService
    ]

})

export class AppModule{}