import { Inject, Injectable } from '@angular/core';
import { IApiConfig } from './ApiConfig';
import { API } from './ApiToken';

@Injectable({
  providedIn: 'root'
})
export class LogService {
  private static count = 0;
  constructor() { 
    LogService.count ++;
    console.log("No. of objects of LogService: "+LogService.count);
  }
  sayHello(name:string){
    return "Hello from LogService "+name;
  }
}
