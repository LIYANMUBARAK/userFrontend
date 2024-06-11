import { Injectable } from '@angular/core';
import { CanActivate} from '@angular/router';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn:'root'
})

export class UserLoginAuthGuard implements CanActivate  {
  constructor(private router:Router){}
  canActivate(): boolean {
 const isAuthenticated = localStorage.getItem('token')
if(isAuthenticated){
  this.router.navigate(['/home'])
  return false
}
    else{
      
      return true
    }
 
};
}