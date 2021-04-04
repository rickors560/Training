import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Logv1Service {
  private static count = 0;
  constructor() { 
    Logv1Service.count ++;
    console.log("No. of objects of LogServiceV1: "+Logv1Service.count);
  }
  sayHello(name:string){
    return "Hey from LogServiceV1 "+name;
  }
}
