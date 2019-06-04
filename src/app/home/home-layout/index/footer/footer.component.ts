import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  
  constructor() { }
  infoUser = {};
  ngOnInit() {
    let localUser = localStorage.getItem('currentUser');
    this.infoUser = JSON.parse(localUser);
    // console.log(this.infoUser);
  }

}
