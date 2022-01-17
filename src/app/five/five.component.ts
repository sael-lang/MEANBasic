import { Component, OnInit } from '@angular/core';

import {SerService} from 'src/app/ser.service'
@Component({
  selector: 'app-five',
  templateUrl: './five.component.html',
  styleUrls: ['./five.component.css']
})
export class FiveComponent implements OnInit {
  edata!:any;
  constructor(public crud: SerService) { }

  ngOnInit(): void {
  }
  getuser(){

    this.crud.get1(6)
    .subscribe(res=>{this.edata=res;})
  }
}
