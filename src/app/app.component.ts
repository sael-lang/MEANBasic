import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { Component } from '@angular/core';
import{FormBuilder,FormGroup} from '@angular/forms'

import {SerService} from 'src/app/ser.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private formbuilder:FormBuilder,public crud: SerService){}
  formvalue=this.formbuilder.group({
    username:[''],
    fname:[''],
  lname:[''],
  society:[''],
  password:[''],
  })

  title = 'project';
  visible:number = 1;
  show1(){
    this.visible = 1;
  }
  show2(){
    this.visible = 2;
  }
  show3(){
    this.visible = 3;
  }
  show4(){
    this.visible = 4;
  }

  getuser(){

    this.crud.get()
    .subscribe(res=>
      {
      if(res.username==this.formvalue.value.username) 
      return true;
    else
    return false;

    }
      
      
      )
  }
}