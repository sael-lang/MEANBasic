import { Component, OnInit } from '@angular/core';

import {SerService} from 'src/app/ser.service'
@Component({
  selector: 'app-four',
  templateUrl: './four.component.html',
  styleUrls: ['./four.component.css']
})
export class FourComponent implements OnInit {
  edata!:any;
  constructor(public crud: SerService) { }

  ngOnInit(): void {
  }
  getuser(){

    this.crud.get1(5)
    .subscribe(res=>{this.edata=res;})
  }
}
