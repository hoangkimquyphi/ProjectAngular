import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { ProductinfoComponent } from './Components/productinfo/productinfo.component';
import { RegisterComponent } from './Components/register/register.component';
import { TrackDetailsComponent } from './Components/track-details/track-details.component';
import { WishlistComponent } from './Components/wishlist/wishlist.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AdminComponent } from './Components/admin/admin.component';
import { AddProductComponent } from './Components/add-product/add-product.component';
import { HomeAdminComponent } from './Components/home-admin/home-admin.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'productInfo/:productId',component:ProductinfoComponent},
  {path:'wishlist',  component:WishlistComponent},
  {path:'checkout',  component:CheckoutComponent},
  {path:'trackDetails',  component:TrackDetailsComponent},
  {path:'register',  component:RegisterComponent},
  {path:'login',  component:LoginComponent},
  {path:'about',  component:AboutComponent},
  {path:'contact',  component:ContactComponent},
  {path:'admin',  component:AdminComponent},
  {path:'addproduct',  component:AddProductComponent},
  {path:'home-admin',  component:HomeAdminComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],


  exports: [RouterModule]
})
export class AppRoutingModule { }
