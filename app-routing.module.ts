import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';
import { DriverDetailsComponent } from './driver-details/driver-details.component';
import { RiderDetailsComponent } from './rider-details/rider-details.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardService } from './service/route-guard.service';
import { EditAddDetailsComponent } from './edit-add-details/edit-add-details.component';
import { EditAddDetails2Component } from './edit-add-details2/edit-add-details2.component';
//import { FirstpageComponent } from './firstpage/firstpage.component';


const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'welcome/:name',component:WelcomeComponent,canActivate:[RouteGuardService]},
  {path:'driver-details',component:DriverDetailsComponent,canActivate:[RouteGuardService]},
  {path:'rider-details',component:RiderDetailsComponent,canActivate:[RouteGuardService]},
  {path:'logout',component:LogoutComponent,canActivate:[RouteGuardService]},
  {path:'edit_addDetails/:id',component:EditAddDetailsComponent,canActivate:[RouteGuardService]},
  {path:'edit_addDetails2/:id',component:EditAddDetails2Component,canActivate:[RouteGuardService]},
  {path:'**',component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
