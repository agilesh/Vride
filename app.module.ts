import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { DriverDetailsComponent } from './driver-details/driver-details.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { RiderDetailsComponent } from './rider-details/rider-details.component';
import { LogoutComponent } from './logout/logout.component';
import { HttpClientModule } from '@angular/common/http';
import { EditAddDetailsComponent } from './edit-add-details/edit-add-details.component';
import { EditAddDetails2Component } from './edit-add-details2/edit-add-details2.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    ErrorComponent,
    DriverDetailsComponent,
    MenuComponent,
    FooterComponent,
    RiderDetailsComponent,
    LogoutComponent,
    EditAddDetailsComponent,
    EditAddDetails2Component,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
