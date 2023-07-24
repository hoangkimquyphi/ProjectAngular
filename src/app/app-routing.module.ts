import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { CartPageComponent } from './cart-page/cart-page.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { HomeComponent } from './home/home.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { SearchComponent } from './search/search.component';
import { SellerAddProductComponent } from './seller-add-product/seller-add-product.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { SellerUpdateProductComponent } from './seller-update-product/seller-update-product.component';
import { UserAuthComponent } from './user-auth/user-auth.component';
import { RegisterComponent } from './register/register.component';
import { AddnewcategoryComponent } from './Admin/component/addnewcategory/addnewcategory.component';
import { AddnewproductComponent } from './Admin/component/addnewproduct/addnewproduct.component';
import { EditdirectoryComponent } from './Admin/component/editdirectory/editdirectory.component';
import { ItemComponent } from './Admin/component/item/item.component';
import { ProductComponent } from './Admin/component/product/product.component';
import { TableComponent } from './Admin/component/table/table.component';
import { DangnhapComponent } from './Admin/dangnhap/dangnhap.component';

const routes: Routes = [
  {
    component: HomeComponent,
    path: '',
  },
  {
    component: SellerAuthComponent,
    path: 'seller-auth',
  },
  {
    component:SellerHomeComponent,
    path:'seller-home',
    canActivate:[AuthGuard]
  },{
    component:SellerAddProductComponent,
    path:'seller-add-product',
    canActivate:[AuthGuard]
  },{
    component:SellerUpdateProductComponent,
    path:'seller-update-product/:id',
    canActivate:[AuthGuard]
  },
  {
    component: SearchComponent,
    path:'search/:query'
  },{
    component:ProductDetailsComponent,
    path:'details/:productId'
  },{
    component:UserAuthComponent,
    path:'user-auth'
  },
  {
    component:RegisterComponent,
    path:'register'
  },
  {
    component:CartPageComponent,
    path:'cart-page'
  },{
    component:CheckoutComponent,
    path:'checkout'
  },{
    component:MyOrdersComponent,
    path:'my-orders'
  },{
    component:AddnewcategoryComponent,
    path:'addnewcategory'
  },{
    component:AddnewproductComponent,
    path:'addnewproduct'
  },{
    component:EditdirectoryComponent,
    path:'editdirectory'
  },{
    component:ItemComponent,
    path:'item'
  },{
    component:ProductComponent,
    path:'product'
  },{
    component:TableComponent,
    path:'table'
  },{
    component:DangnhapComponent,
    path:'dangnhap'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
