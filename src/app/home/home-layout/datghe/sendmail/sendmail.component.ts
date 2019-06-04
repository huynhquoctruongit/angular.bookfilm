import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { NguoidungService } from 'src/app/services/nguoidung.service';
import { DatveService } from 'src/app/services/datve.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sendmail',
  templateUrl: './sendmail.component.html',
  styleUrls: ['./sendmail.component.css']
})
export class SendmailComponent implements OnInit {

  constructor(private _http: Http, private _nguoiDungSV : NguoidungService, private _router: Router ,private _datve : DatveService) { }
  listVeUserDaDat:any;
  nameUser:any;
  infoUser:any;
  ngOnInit() {
    let localUser = localStorage.getItem('currentUser');
    this.infoUser = JSON.parse(localUser);
    if(localUser == null)
    {
      this.infoUser = "";
    }
    this.datVeHistory();
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
