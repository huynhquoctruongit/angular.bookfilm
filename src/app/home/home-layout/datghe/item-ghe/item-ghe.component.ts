import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item-ghe',
  templateUrl: './item-ghe.component.html',
  styleUrls: ['./item-ghe.component.css']
})
export class ItemGheComponent implements OnInit {
  status: boolean = false;
  @Output() emitStatus = new EventEmitter();
  @Input() ListGhe;
  gheDaDat() {
    this.status = !this.status;
    this.emitStatus.emit({
      stt:this.status,
      ghe:this.ListGhe
    })

  }

  constructor() { }

  ngOnInit() {
    
  }

}
