import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot,Router  } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  email:any
  constructor(private routes : Router  ){
    this.email = JSON.parse(localStorage.getItem('user'));
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {if( this.email != null){
      return true;
  }else{
    this.routes.navigate(['/login']);
    return false;
  }

  }
}
