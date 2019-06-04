import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import Swal from 'sweetalert2'
declare var $:any;

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private _auth: AuthService, private _router:Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    this._auth.checkLogin();
    if(this._auth.getIsLogin()){
      return true;
    }
     else{
      Swal.fire(
      'Bạn chưa đăng nhập !',
      'Bạn cần đăng nhập vào hệ thống để đặt vé !',
      'warning'
      )
      setTimeout(() => {
        this._router.navigate(['/']);
      }, 1000);
    } 
  }
}
