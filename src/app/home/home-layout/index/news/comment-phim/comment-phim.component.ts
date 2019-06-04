import { Component, OnInit,Input } from '@angular/core';
import $ from 'jquery';
declare var $:any;
@Component({
  selector: 'app-comment-phim',
  templateUrl: './comment-phim.component.html',
  styleUrls: ['./comment-phim.component.css']
})
export class CommentPhimComponent implements OnInit {
  @Input() itemComment:any;
  cmtlike = 0;
  cmtdislike = 0;
  constructor() { }

  ngOnInit() {

  }
  like(){
    if(this.cmtlike < 1)
    {
      this.cmtlike++;
      
    }
    else{
      this.cmtlike--;
    }
    
  }
  dislike(){
    if(this.cmtdislike < 1)
    {
      this.cmtdislike++;
    }
    else{
      this.cmtdislike--;
    }
    
  }
}
