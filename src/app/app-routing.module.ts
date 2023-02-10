import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {WithnouserService} from "./services/withnouser.service";
import {WithuserService} from "./services/withuser.service";
import {VeriftokenService} from "./services/veriftoken.service";
import {PasswordComponent} from "./password/password.component";
import {SignInComponent} from "./sign-in/sign-in.component";
import {UpdatePasswordComponent} from "./update-password/update-password.component";


const routes: Routes = [
  {path:"",component:PasswordComponent,canActivate:[WithnouserService,VeriftokenService]},
  {path:"login",component:LoginComponent,canActivate:[WithuserService]},
  {path:"sign-in",component:SignInComponent,canActivate:[WithuserService]},
  {path:"password",component:PasswordComponent,canActivate:[WithnouserService,VeriftokenService]},
  {path:"update/:id",component:UpdatePasswordComponent,canActivate:[WithnouserService,VeriftokenService]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
