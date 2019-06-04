import { Component, OnInit, ViewChild } from '@angular/core';
import Chart from 'chart.js';
import { PhimService } from 'src/app/services/phim.service';
import { Subscription } from 'rxjs';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';
import { NguoidungService } from 'src/app/services/nguoidung.service';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
declare var $:any;

@Component({
  selector: 'app-index-admin',
  templateUrl: './index-admin.component.html',
  styleUrls: ['./index-admin.component.css']
})
export class IndexAdminComponent implements OnInit {
  listPhim:any[] = [];
  listUser:any[] = [];
  getDatatoForm:any;
  loadDatatoForm:any[] = [];
  getDatatoFormFilm:any;
  editStatus;
  taikhoan ="";
  registerSubscription : Subscription;
  getListUserSubscription : Subscription;
  getListMovieSubscription : Subscription;
  activeRouteServers : ActivatedRoute;
  constructor(private _phimSer : PhimService,private _activateRouter : ActivatedRoute ,private _userSer : NguoidungService, private _router : Router) { }
  
  ngOnInit() {
    //lay data User up len input edit
    this._activateRouter.queryParams.subscribe(data =>{
     this.getDatatoForm = data;
     console.log(this.getDatatoForm);
    })
    //lay data Phim up len input edit
    this._activateRouter.queryParams.subscribe(dataFilm =>{
      this.getDatatoFormFilm = dataFilm;
      console.log(this.getDatatoFormFilm);
     })
    this._activateRouter.queryParams.subscribe(
      res => {
        this.taikhoan = res.TaiKhoan;
        
      },
      err =>{
        console.log(err);
      }
    )
    this.getListMovieSubscription = this._phimSer.getListMovie().subscribe(
      res => {
        this.listPhim = res;
        
      },
      err => {
        console.log(err)
      }
    )
    // Lay danh sach sinh vien tu Service
    this.getListUserSubscription = this._userSer.layDanhSachNguoiDung().subscribe(
      res => {
        this.listUser = res;
        
      },
      err => {
        console.log(err)
      }
    )
    this.bieuDoLeft();

  }
  
  bieuDoLeft()
  {
    var ctx = document.getElementById("myChart");
    var myChart = new Chart(ctx, {
      type: 'line',
      data: {
          labels: ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6","Tháng 7","Tháng 8","Tháng 9","Tháng 10","Tháng 11","Tháng 12"],
          datasets: [{
              label: '# Doanh thu vé tổng các cụp Rạp',
              data: [3, 5, 15, 2, 1, 6,13,11,4,12,5,7],
              backgroundColor: [
                  'rgba(255, 159, 64, 1)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 2
          }]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero:true
                  }
              }]
          }
      }
  });
  }
  dangXuat(){
    localStorage.removeItem('adminAcount');
    this._router.navigate(['/admin']);
  }
  openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }

  xoaPhim(maPhim: string) {
    this._phimSer.xoaPhim(maPhim).subscribe(
      res => {
        console.log(maPhim);
        // alert('Xóa thành công !');
        
        Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          type: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
          if (result.value) {
            let index = this.listPhim.findIndex(item => item.MaPhim === maPhim);
            this.listPhim.splice(index, 1);
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
          }
        })
      },
      err => {
        console.log(err);
      }
    )
  }
  themPhim(form:any, fileimg:any){
    
    if(form){
      let phim:any = form;
      let phimObj = {
        MaPhim : phim.MaPhim,
        TenPhim : phim.TenPhim,
        Trailer : phim.Trailer,
        HinhAnh : fileimg[0].name,
        MoTa : phim.MoTa,
        MaNhom : 'GP02',
        NgayKhoiChieu : phim.NgayKhoiChieu,
        DanhGia : phim.DanhGia
      }
      this.registerSubscription = this._phimSer.themPhim(phimObj).subscribe(
        res=>{
          var formData = new  FormData();
          formData.append("Files",fileimg[0]);
          formData.append("TenPhim", phim.TenPhim);
          this._phimSer.uploadPhim(formData).subscribe((res)=>{
            if(res === true)
            {
              console.log(res);
            }
          })
          console.log(res);
          const Toast = Swal.mixin({
            toast: true,
            position: 'bottom',
            showConfirmButton: false,
            timer: 3000
          });
          Toast.fire({
            type: 'success',
            title: 'Thêm thành công !',
            
        })
            setTimeout(function(){
            window.location.reload(true);
          },500)
        },
        err=>{
          console.log(err);
        }
      )
    }

    }
  suaPhim(form){
    
    if(form.valid){
      let phim:any = form.value;
      let phimObj = {
        MaPhim : phim.MaPhim,
        TenPhim : phim.TenPhim,
        Trailer : phim.Trailer,
        HinhAnh : phim.HinhAnh,
        MoTa : phim.MoTa,
        MaNhom : 'GP02',
        NgayKhoiChieu : phim.NgayKhoiChieu,
        DanhGia : phim.DanhGia
      }
      this.registerSubscription = this._phimSer.suaPhim(phimObj).subscribe(
        res=>{
          console.log(res);
          const Toast = Swal.mixin({
            toast: true,
            position: 'bottom',
            showConfirmButton: false,
            timer: 3000
          });
          Toast.fire({
            type: 'success',
            title: 'Thêm thành công !',
            
        })
            setTimeout(function(){
            window.location.reload(true);
          },500)
        },
        err=>{
          console.log(err);
        }
      )
    }

    }
  
      // Nguoi dung

  xoaUser(taiKhoan: string) {
          this._userSer.xoaUser(taiKhoan).subscribe(
            res => {
              // console.log(maPhim);
              console.log('Xóa thành công !');
              
              Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
              }).then((result) => {
                if (result.value) {
                  let index = this.listUser.findIndex(item => item.TaiKhoan === taiKhoan);
                  this.listUser.splice(index, 1);
                  Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                  )
                }
              })
            },
            err => {
              console.log(err);
            }
          )
        }
  themUser(form){
    
          if(form.valid){
            let user:any = form.value;
            let UserObj = {
              TaiKhoan : user.TaiKhoan,
              MatKhau : user.MatKhau,
              Email : user.Email,
              SoDT : user.SoDT,
              MaNhom : 'GP05',
              MaLoaiNguoiDung : 'KhachHang',
              HoTen : user.HoTen
            }
            this.registerSubscription = this._userSer.themUser(UserObj).subscribe(
              res=>{
                console.log(res);
                const Toast = Swal.mixin({
                  toast: true,
                  position: 'bottom',
                  showConfirmButton: false,
                  timer: 3000
                });
                Toast.fire({
                  type: 'success',
                  title: 'Thêm thành công !',
                  
              })
                  setTimeout(function(){
                  window.location.reload(true);
                },500)
              },
              err=>{
                console.log(err);
              }
            )
          }
      
          }
  suaUser(form){
    
          if(form.valid){
            let user:any = form.value;
            let UserObj = {
              TaiKhoan : user.TaiKhoan,
              MatKhau : user.MatKhau,
              Email : user.Email,
              SoDT : user.SoDT,
              MaNhom : 'GP05',
              MaLoaiNguoiDung : 'KhachHang',
              HoTen : user.HoTen
            }
            this.registerSubscription = this._userSer.suaUser(UserObj).subscribe(
              res=>{
                console.log(res);
                const Toast = Swal.mixin({
                  toast: true,
                  position: 'bottom',
                  showConfirmButton: false,
                  timer: 3000
                });
                Toast.fire({
                  type: 'success',
                  title: 'Cập nhật thành công !',
                  
              })
                  setTimeout(function(){
                  window.location.reload(true);
                },500)
              },
              err=>{
                console.log(err);
              }
            )
          }
      
          }
}
