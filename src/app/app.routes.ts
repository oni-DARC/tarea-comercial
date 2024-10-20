import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductsServicesComponent } from './pages/products-services/products-services.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactComponent } from './pages/contact/contact.component';
import { SubscriptionFormComponent } from './pages/subscription-form/subscription-form.component';
import { Error404Component } from './pages/error404/error404.component';

export const routes: Routes = [
  { path:"home", component:HomeComponent},
  { path:"products_service", component:ProductsServicesComponent},
  { path:"about", component:AboutUsComponent},
  { path:"contact", component:ContactComponent},
  { path:"subscription_form", component:SubscriptionFormComponent},
  { path:"", redirectTo:"home", pathMatch:"full"},
  { path:"**", component:Error404Component}
];
