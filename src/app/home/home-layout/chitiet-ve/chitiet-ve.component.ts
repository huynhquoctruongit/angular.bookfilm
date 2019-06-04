import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhimService } from 'src/app/services/phim.service';
import $ from 'jquery';
declare var $:any;
@Component({
  selector: 'app-chitiet-ve',
  templateUrl: './chitiet-ve.component.html',
  styleUrls: ['./chitiet-ve.component.css']
})
export class ChitietVeComponent implements OnInit {
  maPhim: string;
  chiTietPhim:any = {};
  newmota:any = "";
  constructor(private _activatedRoute: ActivatedRoute, private _phim: PhimService) { }

  ngOnInit() {
    this._activatedRoute.queryParams.subscribe(
      res => {
        this.maPhim = res.maphim;
        this._phim.layChiTietPhim(this.maPhim).subscribe(
          res =>{
            this.newmota = res.MoTa.split(' ').slice(0, 55).join(" ") + '...';
            // console.log(res);
            this.chiTietPhim = res;
            // console.log(this.chiTietPhim);
          }
        )
      },
      err =>{
        console.log(err);
        
      }
    )  
    $(document).ready(function(){
      $('.venobox').venobox(
        {
          spinner: 'spinner-pulse',
          framewidth: '800px',        // default: ''
          frameheight: '500px'
        }
      );
      
  });
  $(document).ready(function() {
    $("a[href*='#']:not([href='#])").click(function() {
      let target = $(this).attr("href");
      $('html').stop().animate({
        scrollTop: $(target).offset().top
      }, 1000);
      event.preventDefault();
    });
  });
  }

}
