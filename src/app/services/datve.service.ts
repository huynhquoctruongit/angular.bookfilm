import { Injectable } from '@angular/core';
import { Http,Response, Headers} from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DatveService {

  constructor(private _http:Http) { }
  layChiTietPhongVe(maLichChieu:string){
    const url= `http://svcy2.myclass.vn/api/QuanLyPhim/ChiTietPhongVe?MaLichChieu=${maLichChieu}`;
    return this._http.get(url).pipe(
      map((res:Response) => res.json())
   )
  }
  datVe(obj){
    let headerRegister = new Headers();
    headerRegister.append('Content-Type','application/json;charset=UTF-8');
    let obSer = this._http.post("http://svcy2.myclass.vn/api/QuanLyDatVe/DatVe",obj,{headers:headerRegister})
    .pipe(
      map((res:Response) => res.json())
    )
    return obSer;
  }
  getLichSuDatVe(taiKhoan){
    let headerRegister = new Headers();
    headerRegister.append('Content-Type','application/json;charset=UTF-8');
    let obSer = this._http.post(`http://svcy2.myclass.vn/api/QuanLyDatVe/XemLichSuDatVe?TaiKhoan=${taiKhoan}`,{headers:headerRegister})
    .pipe(
      map((res:Response) => res.json())
    )
    return obSer;
  }
}
