import { Injectable } from '@angular/core';
import { Http,Response,Headers } from '@angular/http';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class PhimService {
  constructor(private _http: Http) { }
  getListMovie(){
    let obSer = this._http.get("http://svcy2.myclass.vn/api/QuanLyPhim/LayDanhSachPhim?MaNhom=GP02")
    .pipe(
      map((res:Response)=>res.json())
    )
    return obSer;
  }
  uploadPhim(body){
    let ob = this._http.post("http://svcy2.myclass.vn/api/QuanLyPhim/UploadFile",body)
    .pipe (
      map((res:Response)=>res.json())
    )
      return ob;
  }
  layChiTietPhim(maPhim:string){
    const url = `http://svcy2.myclass.vn/api/QuanLyPhim/LayChiTietPhim?MaPhim=${maPhim}`;
    return this._http.get(url).pipe(
      map((res:Response) => res.json())
    )
  }
  layChiTietPhimGioChieu(gioChieu:string){
    const url = `http://svcy2.myclass.vn/api/QuanLyPhim/LayChiTietPhim?LichChieu=${gioChieu}`;
    return this._http.get(url).pipe(
      map((res:Response) => res.json())
    )
  }
  xoaPhim(maPhim: string) {
    var url = `http://svcy2.myclass.vn/api/QuanLyPhim/XoaPhim?MaPhim=${maPhim}`;
    return this._http.delete(url).pipe(map(
      (res: Response) => res.json()
    ))
  }
  themPhim(obj){
    let headerRegister = new Headers();
    headerRegister.append('Content-Type','application/json;charset=UTF-8');
    let obSer = this._http.post("http://svcy2.myclass.vn/api/QuanLyPhim/ThemPhimMoi",obj,{headers:headerRegister})
    .pipe(
      map((res:Response) => res.json())
    )
    return obSer;
  }
  suaPhim(obj){
    let headerRegister = new Headers();
    headerRegister.append('Content-Type','application/json;charset=UTF-8');
    let obSer = this._http.post("http://svcy2.myclass.vn/api/QuanLyPhim/CapNhatPhim",obj,{headers:headerRegister})
    .pipe(
      map((res:Response) => res.json())
    )
    return obSer;
  }
}
