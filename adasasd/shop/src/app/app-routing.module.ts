import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { PaymentComponent } from './payment/payment.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './user/admin/admin.component';

const routes: Routes = [
  { path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },
  { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
  {path:'contact',component:ContactComponent},
  {path:'about',component:AboutComponent},
  {path:'payment',component:PaymentComponent},
  {path:'home',component:HomeComponent},
{path:'admin', component:AdminComponent},   
 

   
];
 
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
