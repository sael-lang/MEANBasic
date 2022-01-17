import { Component, OnInit } from '@angular/core';
import {SerService} from 'src/app/ser.service'
@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.css']
})
export class ThreeComponent implements OnInit {
  edata!:any;
  constructor(public crud: SerService) { }

  ngOnInit(): void {
  }
  getuser(){

    this.crud.get1(4)
    .subscribe(res=>{this.edata=res;})
  }
}