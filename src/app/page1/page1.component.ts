import { Component, createNgModuleRef, OnInit } from '@angular/core';
import{FormBuilder,FormGroup} from '@angular/forms'
import { user } from './page1';
import { AppComponent } from '../app.component';
import {SerService} from 'src/app/ser.service'
@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {
  formvalue !: FormGroup
  userobj: user= new user();  
  edata!:any;
  constructor(private formbuilder:FormBuilder,public crud: SerService) { }
  ngOnInit(): void {
    this.formvalue=this.formbuilder.group({
      username:[''],
      fname:[''],
    lname:[''],
    society:[''],
    password:[''],
    })
    this.getuser();
  }
postuser(){
  this.userobj.username=this.formvalue.value.username;
  this.userobj.fname=this.formvalue.value.fname;
  this.userobj.lname=this.formvalue.value.lname;
  this.userobj.society=this.formvalue.value.society;
  this.userobj.password=this.formvalue.value.password;
  this.crud.post(this.userobj)
  .subscribe((res: any)=>{
    console.log(res);
    alert("added successfully")
    this.getuser();
    
  }
  
    )
    
}
getuser(){

  this.crud.get()
  .subscribe(res=>{this.edata=res;})
}
deluser(row:number){

  this.crud.delete(row)
  .subscribe(res=>alert("Record deleted"))
  this.getuser();
}
onedit(row:any){
  this.userobj.id=row;
  this.formvalue.controls['username'].setValue(row.username);
  this.formvalue.controls['fname'].setValue(row.fname);
  this.formvalue.controls['lname'].setValue(row.lname);
  this.formvalue.controls['society'].setValue(row.society);
  this.formvalue.controls['password'].setValue(row.password);
}
click(){
  this.formvalue.reset();
}
upduser(){

  this.userobj.username=this.formvalue.value.username;
  this.userobj.fname=this.formvalue.value.fname;
  this.userobj.lname=this.formvalue.value.lname;
  this.userobj.society=this.formvalue.value.society;
  this.userobj.password=this.formvalue.value.password;
  this.crud.update(this.userobj,this.userobj.id)
  .subscribe(res=>alert("Record updated"))
  this.getuser();
}


}
