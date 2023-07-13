import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SiteFrameworkModule } from './site-framework/site-framework.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserModule } from './user/user.module';
import { FormsModule } from '@angular/forms';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { PaymentComponent } from './payment/payment.component';
import { NgxPayPalModule } from 'ngx-paypal';
import { HomeComponent } from './home/home.component';
@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    AboutComponent,
    PaymentComponent,
    HomeComponent,
 
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SiteFrameworkModule,
    BrowserAnimationsModule,
    UserModule,
    FormsModule,
    NgxPayPalModule,
   

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
