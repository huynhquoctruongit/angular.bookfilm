import { Component, OnInit } from '@angular/core';
import {User} from 'src/app/Models/user.models';
import { ActivatedRoute,Router } from '@angular/router';
import { DatveService } from 'src/app/services/datve.service';
import { PhimService } from 'src/app/services/phim.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';
import $ from 'jquery';
import { Subscription } from 'rxjs';
declare var $:any;
@Component({
  selector: 'app-datghe',
  templateUrl: './datghe.component.html',
  styleUrls: ['./datghe.component.css']
})

export class DatgheComponent implements OnInit {
  fiveMinutes: number = 60 * 1;
  timeInterval:any;
  giaVe:any;
  maGhe:any;
  nameUser:any;
  datveSub: Subscription;
  maPhim: string;
  maLichChieu :string;
  chiTietPhim:any = {};
  lichChieu:any = {};
  soghe:any = 0;
  listGheDaDat = [];
  soGheDaDat:number = 0;
  tinhTien:number = 0;
  soluong:number = 0;
  infoUser:any = {}
  soghedadat:any;
  compoBapNuoc:{gia:number, tenCombo:string}[] = [
    {
      tenCombo:"Bắp rang",
      gia : 20000
    }
  ];
  ve: any;
  constructor(private _router:Router, private _activateRouter : ActivatedRoute, private _phim: DatveService, private _dsphim: PhimService) { }
  ngOnInit() {
    console.log(this.lichChieu);
    // Lay di lieu tu Storage
    let localUser = localStorage.getItem('currentUser');
    this.nameUser = JSON.parse(localUser);
    
    // Kiem tra Storrage
    if(localUser == null)
    {
      this.nameUser = "";
    }
    // 
    this._activateRouter.queryParams.subscribe(
      res => {
        this.maPhim = res.maphim;
        this._dsphim.layChiTietPhim(this.maPhim).subscribe(
          res =>{
            // console.log(res);
            this.chiTietPhim = res;
          }
        )
      },
      err =>{
        console.log(err);
        
      }
    )  

    this._activateRouter.queryParams.subscribe(
      res => {
        this.maLichChieu = res.malichchieu;
        this._phim.layChiTietPhongVe(this.maLichChieu).subscribe(
          res =>{
            this.lichChieu = res;
            // console.log(res);
          }
        )
      },
      err =>{
        console.log(err);
      }
    )
    let display = (<HTMLSpanElement>document.getElementById('thoigiandat'));
            this.startTimer(this.fiveMinutes, display);
  }
   openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginRight = "250px";
    document.getElementById("thanhtoan-btn").style.opacity = "0";
    document.getElementById("chonghe-menu").style.borderTop = "none";
    document.getElementById("chonghe-menu2").style.borderTop = "2px solid red";
    // document.getElementById("chonghe-menu2").style.transition = "all";
    
}

    closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginRight= "0";
    document.body.style.backgroundColor = "white";
    document.getElementById("thanhtoan-btn").style.opacity = "1";
    document.getElementById("chonghe-menu2").style.borderTop = "none";
    document.getElementById("chonghe-menu").style.borderTop = "2px solid red";
    // document.getElementById("chonghe-menu").style.transition = "all 3s";
  }
  
  datGheParent(e){
    // console.log(e);
    // console.log(e);
      
    if(e.stt)
    {
      if(this.soGheDaDat < 1)
      {
        this.soGheDaDat++;
        this.listGheDaDat.push(e.ghe);
      // console.log(this.listGheDaDat);
        this.tinhTien += e.ghe.GiaVe;
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
          title: 'Hệ thống chỉ cho đặt 1 lần 1 vé !',
          
      })
      setTimeout(function(){
        window.location.reload(true);
      },500)
      }

    }
    else
    {
      this.soGheDaDat--;
      let index = this.listGheDaDat.findIndex(item => item.STT == e.ghe.STT);
      if (index !== -1) {
        this.listGheDaDat.splice(index, 1);
        this.tinhTien -= e.ghe.GiaVe;
      }
    }
  }
  tangtien()
  {
    for(let giacombo of this.compoBapNuoc)
    {
      this.tinhTien += giacombo.gia;
      this.soluong += 1;
      
    }
    
  }
  giamtien()
  {
    for(let giacombo of this.compoBapNuoc)
    {
      if(this.soluong > 0)
      {
        this.tinhTien -= giacombo.gia;
        this.soluong -= 1;
      }
    }
    
  }

  disabledThanhToan()
  {
    if(this.soGheDaDat !== 0){
      let localUser = localStorage.getItem('currentUser');
        this.nameUser = JSON.parse(localUser);
        console.log(this.nameUser);
      let ve ={ 
        MaLichChieu : this.maLichChieu,
        TaiKhoanNguoiDung: this.nameUser.TaiKhoan,
        DanhSachVe:[
          {MaGhe : this.listGheDaDat[0].MaGhe, GiaVe : this.listGheDaDat[0].GiaVe},
          // {MaGhe : this.listGheDaDat[1].MaGhe, GiaVe : this.listGheDaDat[1].GiaVe},
        ]
      } 
      console.log(ve);
      
      this.datveSub = this._phim.datVe(ve).subscribe(
        res => {
         
          if(typeof res === 'string'){   
             const Toast = Swal.mixin({
            toast: true,
            position: 'bottom',
            showConfirmButton: false,
            timer: 3000
          });
          Toast.fire({
            
            type: 'success',
            title: 'Đặt vé thành công !',
            
        })
           
          }
          clearInterval(this.timeInterval);

          this._router.navigate(['/check-email']);
        },
        err => {
          console.log(err)
        }
      )
    }
    else{
      const Toast = Swal.mixin({
      toast: true,
      position: 'bottom',
      showConfirmButton: false,
      timer: 3000
    });
    Toast.fire({
      type: 'warning',
      title: 'Vui lòng chọn ghế !',
      
  })
    }
  }
  startTimer(duration, display) {
    let timer: any = duration, minutes, seconds;
    this.timeInterval = setInterval(() => {
      minutes = Math.floor((timer / 60));
      seconds = Math.floor(timer % 60);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      display.textContent = minutes + ":" + seconds;
      if (--timer < 0) {
        timer = duration;
        // console.log(this.chiTietPhim.MaPhim)
        this._router.navigate(['/']);
          const Toast = Swal.mixin({
          toast: true,
          position: 'bottom',
          showConfirmButton: true,
          timer: 4000
        });
        Toast.fire({
          type: 'info',
          title: 'Thời gian đặt phim đã hết !',
          
      })
        clearInterval(this.timeInterval);
      }
    }, 1000);
  }
}
