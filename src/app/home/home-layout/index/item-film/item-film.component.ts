import { Component, OnInit,Input } from '@angular/core';
import $ from 'jquery';
declare var $:any;
@Component({
  selector: 'app-item-film',
  templateUrl: './item-film.component.html',
  styleUrls: ['./item-film.component.css']
})
export class ItemFilmComponent implements OnInit {
  @Input() itemfilm:any;
  constructor() { }

  ngOnInit() {
    $(document).ready(function(){
      $('.venobox').venobox(
        {
          spinner: 'spinner-pulse',
          framewidth: '800px',        // default: ''
          frameheight: '500px'
        }
      );
      
  });
  }

}
