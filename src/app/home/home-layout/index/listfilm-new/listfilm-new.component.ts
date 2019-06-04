import { Component, OnInit } from '@angular/core';
import {Http, Response} from '@angular/http';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-listfilm-new',
  templateUrl: './listfilm-new.component.html',
  styleUrls: ['./listfilm-new.component.css']
})
export class ListfilmNewComponent implements OnInit {
  constructor(private _http: Http) { }

  listFilm :any[]= [];
  ngOnInit() {
    this._http.get('http://svcy2.myclass.vn/api/QuanLyPhim/LayDanhSachPhim?MaNhom=GP08')
    .pipe(
      map((res: Response) => res.json())
    )
    .subscribe(
      (res) => {
        this.listFilm = res;
      },
      (err) => {
        console.log(err);
      }
    )
  }

}
