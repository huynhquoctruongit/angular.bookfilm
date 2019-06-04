import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';
import {Http} from '@angular/http';
import {NguoidungService} from 'src/app/services/nguoidung.service';
import { Router } from '@angular/router';
import $ from 'jquery';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss';
import { Subscription } from 'rxjs';
import { DatveService } from 'src/app/services/datve.service';
declare var $:any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  listVeUserDaDat:any;
  infoUser:any;
  
  registerSubscription : Subscription;
  constructor(private _http: Http, private _nguoiDungSV : NguoidungService, private _router: Router ,private _datve : DatveService) { }
  dangNhapSubscription : Subscription;
  

  ngOnInit() {
    let localUser = localStorage.getItem('currentUser');
    this.infoUser = JSON.parse(localUser);
    if(localUser == null)
    {
      this.infoUser = "";
    }
    this.datVeHistory();
    console.log(this.listVeUserDaDat);
    // console.log(this.infoUser);
    // console.log(this.listVeUserDaDat);
    $(document).ready(function() {
      $("a[href*='#']:not([href='#])").click(function() {
        let target = $(this).attr("href");
        $('html').stop().animate({
          scrollTop: $(target).offset().top
        }, 1000);
        event.preventDefault();
      });
    });
    window.onscroll = function() {myFunction()};

var navbar = document.getElementById("all");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
this._nguoiDungSV.layDanhSachNguoiDung().subscribe(
  (kq: any) => {
    // console.log(kq);
  }
)
  }

  dangKy(form){
    if(form.valid){
      let user:any = form.value;
      let userObject = {
      TaiKhoan: user.TaiKhoan,
      MatKhau: user.MatKhau,
      Email: user.Email,
      SoDT: user.SoDT,
      MaNhom: 'GP05',
      MaLoaiNguoiDung: 'KhachHang',
      HoTen: user.HoTen,
    }
    this.registerSubscription = this._nguoiDungSV.themNguoiDung(userObject).subscribe(
      res => {
        if(typeof res !== 'string'){
          
          const Toast = Swal.mixin({
          toast: true,
          position: 'bottom',
          showConfirmButton: false,
          timer: 3000
        });
        Toast.fire({
          type: 'success',
          title: 'Đăng ký thành công !',
          
        })
        }
        else{
          const Toast = Swal.mixin({
            toast: true,
            position: 'bottom',
            showConfirmButton: false,
            timer: 3000
          });
          Toast.fire({
            type: 'error',
            title: 'Tài khoản đã tồn tại !',
            
        })
        }
      },
      err =>{
        console.log(err);
      }
        )
  }
}
  dangNhap(form: NgForm)
  {
    
    var taiKhoan = form.value.TaiKhoan;
    var matKhau = form.value.MatKhau;

    this.dangNhapSubscription = this._nguoiDungSV.dangNhap(taiKhoan,matKhau).subscribe(
      res => {
        // console.log(res);
        if(typeof res !== "string"){
          localStorage.setItem('currentUser',JSON.stringify(res));
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
      setTimeout(function(){
        window.location.reload(true);
      },1000)
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
            title: 'Tài khoản hoặc mật khẩu không đúng !',
            
        })
        }
      },
      err => {
        console.log(err);
      }
    )
  }
  logOut()
  {
    // console.log('logout');
    localStorage.removeItem('currentUser');
    const Toast = Swal.mixin({
      toast: true,
      position: 'bottom',
      showConfirmButton: false,
      timer: 3000
    });
    Toast.fire({
      type: 'success',
      title: 'Tài khoản đã đăng xuất !',
      
  })
  setTimeout(function(){
    window.location.reload(true);
  },500)
  }
  datVeHistory(){
      this._datve.getLichSuDatVe(this.infoUser.TaiKhoan).subscribe(
        res => {
         
          this.listVeUserDaDat = res.DanhSachVeDaDat;
          console.log(this.listVeUserDaDat);
        },
        err => {
          console.log(err);
        }
      )
  }
}
