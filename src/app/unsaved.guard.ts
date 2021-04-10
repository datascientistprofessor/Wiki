import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ProfileComponent } from './profile/profile.component';

@Injectable({
  providedIn: 'root'
})
export class UnsavedGuard implements CanDeactivate<ProfileComponent> {
  canDeactivate(component: ProfileComponent) {
    if(component.isDirty){
      return  window.confirm("You have some unsaved changes. Sure you want to leave?")
    }
    return true;
  }
  
}
