import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AddressComponent } from './address/address.component';
import { OrdersComponent } from './orders/orders.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ShopComponent } from './shop/shop.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { cartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginGuard } from './components/auth/login.guard.';

const routes: Routes = [
  { path:"", component:HomeComponent },
  { path:"login", component:LoginComponent},
  { path:"address", component:AddressComponent, canActivate: [LoginGuard]},
  { path:"orders", component:OrdersComponent, canActivate: [LoginGuard]},
  {path:"profile-details",component:ProfileDetailsComponent, canActivate: [LoginGuard]},
  {path:"signup",component:SignupComponent},
  {path:"forgot-password",component:ForgotPasswordComponent},
  {path:"shop",component:ShopComponent},
  {path:"product-single",component:ProductDetailsComponent},
  {path:"cart",component:cartComponent, canActivate: [LoginGuard]},
  {path:"checkout",component:CheckoutComponent, canActivate: [LoginGuard]},
  {path:"dashboard",component:DashboardComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }