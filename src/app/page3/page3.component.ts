import { Component, OnInit } from '@angular/core'
import {SerService} from 'src/app/ser.service'

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.css']
})
export class Page3Component implements OnInit {
  edata!:any;
  constructor(public crud: SerService) { }

  ngOnInit(): void {
  }
  getuser(){

    this.crud.get1(1)
    .subscribe(res=>{this.edata=res;})
  }
}
