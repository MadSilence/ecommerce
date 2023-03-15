import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AddressComponent } from './address/address.component';
import { OrdersComponent } from './orders/orders.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import {SignUpComponent} from './signup/signup.component';
import {ForgotPasswordComponent} from './forgot-password/forgot-password.component';

const routes: Routes = [
  { path:"", component:HomeComponent },
  { path:"login", component:LoginComponent },
  { path:"address", component:AddressComponent },
  { path:"orders", component:OrdersComponent },
  {path:"profile-details",component:ProfileDetailsComponent},
  {path:"signup",component:SignUpComponent},
  {path:"forgot-password",component:ForgotPasswordComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }