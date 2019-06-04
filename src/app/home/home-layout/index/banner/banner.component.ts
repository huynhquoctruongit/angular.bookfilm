import { Component, OnInit } from "@angular/core";
import $ from 'jquery';
declare var $:any;
@Component({
  selector: "app-banner",
  templateUrl: "./banner.component.html",
  styleUrls: ["./banner.component.css"]
})
export class BannerComponent implements OnInit {
  constructor() {}
  listFilm: any[] = [
    {
      TenPhim: "Hai Phượng",
      ChiTiet:
        "Bộ phim là hành trình nghẹt thở và căng thẳng của bà mẹ đơn thân Hai Phượng (Ngô Thanh Vân) khi phải đối đầu với cả 1 đường dây tội phạm bắt cóc và buôn bán nội tạng xuyên quốc gia để cứu đứa con gái bé bỏng Mai (Mai Cát Vi). ",
      HinhAnh:
        "https://s3img.vcdn.vn/123phim/2019/02/hai-phuong-sneakshow-15508021265617.jpg",
        TraiLer:"https://www.youtube.com/watch?v=THXPCF6UHh8"
    },
    {
      TenPhim: "Vu Quy Đại Náo",
      ChiTiet:
        "Bộ phim là hành trình nghẹt thở và căng thẳng của bà mẹ đơn thân Hai Phượng (Ngô Thanh Vân) khi phải đối đầu với cả 1 đường dây tội phạm bắt cóc và buôn bán nội tạng xuyên quốc gia để cứu đứa con gái bé bỏng Mai (Mai Cát Vi). ",
      HinhAnh:
        "https://s3img.vcdn.vn/123phim/2019/02/vu-quy-dai-nao-15508021506204.jpg",
        TraiLer:"https://www.youtube.com/watch?v=sLbAa0-PoQw"
    },
    {
      TenPhim: "Atila Thiên Thần Chiến Binh",
      ChiTiet:
        "Bộ phim là hành trình nghẹt thở và căng thẳng của bà mẹ đơn thân Hai Phượng (Ngô Thanh Vân) khi phải đối đầu với cả 1 đường dây tội phạm bắt cóc và buôn bán nội tạng xuyên quốc gia để cứu đứa con gái bé bỏng Mai (Mai Cát Vi). ",
      HinhAnh:
        "https://s3img.vcdn.vn/123phim/2019/02/alita-thien-than-chien-binh-15504047654193.jpg",
        TraiLer:"https://www.youtube.com/watch?v=hpLUO424uHg"
    }
  ];
  ngOnInit() {
    // this.listFilm.ChiTiet.split(' ').slice(0, 5).join(" ") + '...';
    $(document).ready(function() {
      $(".venobox").venobox({
        spinner: "spinner-pulse",
        framewidth: "800px", // default: ''
        frameheight: "500px"
      });
    });
  }
}
