import { Component, OnInit,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  commentArr:any = [{
    TenDanhGia : "Huỳnh Quốc Trưởng",
    SaoDanhGia : "3",
    EmailDanhGia : "huynhquoctruongit@gmail.com",
    NoiDung : "Phim quá hay, tuyệt phẩm !" 
  },
  {
    TenDanhGia : "Phan Thanh Qúy",
    SaoDanhGia : "5",
    EmailDanhGia : "phanquy123@gmail.com",
    NoiDung : "Đếch thể chê,dẫn người yêu đi xem mới đc =))" 
  }];
  constructor() { }
  @ViewChild('formRating') formRating:NgForm;
  ngOnInit() {
  }
  ratingStar(formRating){
    // console.log(formRating)
    if(formRating.valid){
      this.commentArr.unshift(formRating.value);
      this.formRating.resetForm();
    }
  }

}
