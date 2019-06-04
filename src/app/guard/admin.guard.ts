import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import Swal from 'sweetalert2'
declare var $:any;
@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private _auth: AuthService, private _router:Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      this._auth.checkLoginAdmin();
      if(this._auth.getIsLoginAdmin()){
        return true;
      }
       else{
        Swal.fire(
        'Bạn không có quyền vào trang này !',
        'Not admin',
        'warning'
        )
        setTimeout(() => {
          this._router.navigate(['/']);
        }, 1000);
      } 
  }
}
