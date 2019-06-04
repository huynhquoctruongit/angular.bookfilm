import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {

  constructor(private _router:Router) { }
  taiKhoanAdmin:any = {
    TaiKhoan: "admin",
    MatKhau: "admin123"
  } 
  ngOnInit() {
  }
  dangNhapAdnin(form: NgForm)
  {
    let taiKhoan = form.value.TaiKhoan;
    let matKhau = form.value.MatKhau;

    if( taiKhoan === this.taiKhoanAdmin.TaiKhoan || matKhau === this.taiKhoanAdmin.MatKhau)
    {
      localStorage.setItem('adminAcount',JSON.stringify(this.taiKhoanAdmin));
      const Toast = Swal.mixin({
        toast: true,
        position: 'bottom',
        showConfirmButton: false,
        timer: 3000
         });
        Toast.fire({
        type: 'success',
        title: 'Đăng nhập thành công !',
        
      })
      // setTimeout(function(){
      //   window.location.reload(true);
      // },500)
        this._router.navigate(['/index-admin']);
    }
    else
    {
      const Toast = Swal.mixin({
        toast: true,
        position: 'bottom',
        showConfirmButton: false,
        timer: 3000
         });
        Toast.fire({
        type: 'error',
        title: 'Sai tài khoản hoặc mật khẩu !',
        
      })
    }
  }
}
