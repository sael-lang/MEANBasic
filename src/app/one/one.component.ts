import { Component, OnInit } from '@angular/core';
import {SerService} from 'src/app/ser.service'
@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {

  constructor(public crud: SerService) { }
  edata!:any;
  ngOnInit(): void {
  }
  getuser(){

    this.crud.get1(2)
    .subscribe(res=>{this.edata=res;})
  }
}
