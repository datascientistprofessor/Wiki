import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Resolve } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountInfoGuard implements Resolve<any> {

  userObj = {
    userId : 7,
    username: 'Tazhik'
  };

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.userObj;
  }
}
