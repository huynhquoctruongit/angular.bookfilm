import { Injectable } from '@angular/core';
import { Http,Response,Headers } from '@angular/http';
import { map } from 'rxjs/operators';
import {User} from '../Models/user.models';
import{Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NguoidungService {
    constructor(private _http:Http) { }
    themNguoiDung(user:User):Observable<any>{
      let url=`http://svcy2.myclass.vn/api/QuanLyNguoiDung/ThemNguoiDung`;
      //post cần định dạng kiểu cho serve
      let headerDangKy=new Headers();
      headerDangKy.append('Content-Type','application/json;charset=UTF-8');
      let obServe=this._http.post(url,user,{headers:headerDangKy})
      .pipe(
        map((res:Response)=>res.json())
      )
      return obServe;
    }
    layDanhSachNguoiDung():Observable<any>{
      var url=`http://svcy2.myclass.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP05`;
      var obServe=this._http.get(url)
      .pipe(
        map((res:Response)=>res.json())
      )
      return obServe;
    }
    
    dangNhap(taiKhoan:string,matKhau:string){
      var headerDangNhap=new Headers();
      headerDangNhap.append('Content-Type', 'application/json;charset=UTF-8');
       var url = `http://svcy2.myclass.vn/api/QuanLyNguoiDung/DangNhap?taikhoan=${taiKhoan}&matkhau=${matKhau}`;
       var obServe = this._http.post(url,undefined,{headers:headerDangNhap})
       .pipe(
         map((res:Response)=>res.json())
       )
       return obServe;
  
    }
    xoaUser(taiKhoan: string) {
      var url = `http://svcy2.myclass.vn/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`;
      return this._http.delete(url).pipe(map(
        (res: Response) => res.json()
      ))
    }
    themUser(obj){
      let headerRegister = new Headers();
      headerRegister.append('Content-Type','application/json;charset=UTF-8');
      let obSer = this._http.post("http://svcy2.myclass.vn/api/QuanLyNguoiDung/ThemNguoiDung",obj,{headers:headerRegister})
      .pipe(
        map((res:Response) => res.json())
      )
      return obSer;
    }
    suaUser(obj){
      let headerRegister = new Headers();
      headerRegister.append('Content-Type','application/json;charset=UTF-8');
      let obSer = this._http.post("http://svcy2.myclass.vn/api/QuanLyNguoiDung/CapNhatThongTin",obj,{headers:headerRegister})
      .pipe(
        map((res:Response) => res.json())
      )
      return obSer;
    }
}