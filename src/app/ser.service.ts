import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SerService {

  constructor() { }
  arr:string[]=[];
  index:number=0;
  obj = {
    email: '',
    pass: ''
  }
  setObj(a:any){
    this.obj= a;
  }
  getObj(){
    return this.obj;
  }
 setVal(a:any){
  this.arr.push(a);
 }
 getVal(){
  return this.arr;
 }
 update(a:any){
  this.arr[this.index]=a;
 }
}
