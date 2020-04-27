import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { HardcodedAuthenticationService } from './hardcoded-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate 
{

  constructor(public hardcodedAuthenticationService:HardcodedAuthenticationService,
    public router:Router) { }
  canActivate(route:ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot)
  {
   
  if(this.hardcodedAuthenticationService.isUserLoggedInfunc())
  {

    return true;
  }
   this.router.navigate(['login']) 
   return false; 
  }
}