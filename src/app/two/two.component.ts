import { Component, OnInit } from '@angular/core';

import {SerService} from 'src/app/ser.service'
@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {
  edata!:any;
  constructor(public crud: SerService) { }

  ngOnInit(): void {
  }
  getuser(){

    this.crud.get1(3)
    .subscribe(res=>{this.edata=res;})
  }
}

