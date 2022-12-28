import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { ProfileComponent } from './profile/profile.component';
import { UserslistComponent } from './userslist/userslist.component';
import { UserService } from './userslist/user.service';
import { RegisterService } from './register-form/registerForm.service';
import { LoginFormService } from './login-form/login.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    RegisterFormComponent,
    ProfileComponent,
    UserslistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    UserService,
    RegisterService,
    LoginFormService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
