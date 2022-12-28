import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NewEmployee } from './newemployee/newemployee.component';
import { EmployeeService } from './services/employee.service';

@NgModule({
  declarations: [
    AppComponent,
    NewEmployee
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
