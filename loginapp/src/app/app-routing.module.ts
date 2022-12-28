import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { ProfileComponent } from './profile/profile.component';
import { UserslistComponent } from './userslist/userslist.component';
import { ProfileGuardService } from './guards/profileGuard.service';
import { UserGuardService } from './guards/userGuard.service';

const routes: Routes = [
  {path:'profile',canActivate:[ProfileGuardService],component: ProfileComponent},
  {path:'users',canActivate:[UserGuardService],component: UserslistComponent},
  {path:'login',component: LoginFormComponent},
  {path:'register',component: RegisterFormComponent},
  {path:'',component: RegisterFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    ProfileGuardService,
    UserGuardService
  ]
})
export class AppRoutingModule { }
