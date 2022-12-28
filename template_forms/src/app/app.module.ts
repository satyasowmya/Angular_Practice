import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { FormsComponent } from './forms/forms.component';
import { FormsService } from './forms/form.service';

@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    ConfirmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    FormsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
