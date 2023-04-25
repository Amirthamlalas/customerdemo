import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HttpClientModule } from '@angular/common/http';
import { CustomerLoginComponent } from './customer-login/customer-login.component';

const myroute: Routes=[
{
  path:"",
  component:HomePageComponent
},
{
  path:"signup",
  component:SignUpComponent
},
{
  path:"login",
  component:CustomerLoginComponent
}
]
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SignUpComponent,
    CustomerLoginComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myroute),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
