import { Component, OnInit } from '@angular/core';
import $ from 'jquery';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';
declare var $: any;
@Component({
  selector: 'app-film-dangchieu',
  templateUrl: './film-dangchieu.component.html',
  styleUrls: ['./film-dangchieu.component.css']
})
export class FilmDangchieuComponent implements OnInit {
  DanhSachPhimDangChieu: any[] = [];
  constructor(private _http: Http) { }
  ngOnInit() {
      
    this._http.get('http://svcy2.myclass.vn/api/QuanLyPhim/LayDanhSachPhim?MaNhom=GP02')
        .pipe(
            map((res: Response) => res.json())
        )
        .subscribe(
            
            (res) => {
                // console.log(res);
                this.DanhSachPhimDangChieu = res;
                localStorage.setItem('listPhim',JSON.stringify(res));
                // this.DanhSachPhimDangChieu[0].MoTa.split(' ').slice(0, 5).join(" ") + '...' == res[0].MoTa;
                
                 setTimeout(() => {
                    //  console.log('aaa')
                     $('.owl-carousel').owlCarousel({
                      loop:true,
                      margin:10,
                      nav:true,
                      dots:true,
                      responsive:{
                          0:{
                              items:1
                          },
                          700:{
                              items:2
                          },
                          900:{
                              items:3
                          },
                          1200:{
                              items:4
                          }
                      }
                  })
                  
                }, 0);
                
               
            },
            (err) => {
                console.log(err);
            }
            
        )
       
    
}

//chạy khi css đã load thành công 

ngAfterViewInit() {
    
 
   
}

}
