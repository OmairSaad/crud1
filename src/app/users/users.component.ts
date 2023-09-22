import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms'
import { SerService } from '../ser.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent{
data:any = new FormGroup ({
  email: new FormControl('', [Validators.required, Validators.pattern(/([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$/)]),
  pass: new FormControl('', [Validators.required, Validators.pattern(/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/)]),
  mob: new FormControl('91',[Validators.required])
})
details:any[]=[];
save(){
  this.details.push(this.data.value);
  this.data.reset()
  console.log(this.details)
  alert("Added Successfully")
}
get fc(){
  return this.data.controls
}
del(a:number){
  this.details.splice(a,1);
  alert("Deleted Successfully")
}
ind:number=0;
val:any 
edit(a:any, i:number){
this.data.patchValue(a);
this.ind= i;
this.show =true;
}
upd(){
  console.log(this.data)
  this.details[this.ind]=this.data.value;
  this.show = false;
  this.data.reset();
  alert("Upadated Successfully")
}
show:boolean= false;
}
