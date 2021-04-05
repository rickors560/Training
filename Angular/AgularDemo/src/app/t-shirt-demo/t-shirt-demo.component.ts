import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-t-shirt-demo',
  templateUrl: './t-shirt-demo.component.html',
  styleUrls: ['./t-shirt-demo.component.css']
})
export class TShirtDemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  h:number = 250;
  w:number = 250;
  imgSource:string = '../assets/front.jpg';
  setdefault(){
    this.h = 200;
    this.w = 200;
  }
  onhover():void{
    this.imgSource = "../assets/back.jpg";
  }
  onhoverout():void{
    this.imgSource = '../assets/front.jpg';
  }
  checkforzero(){
    if(this.h <= 0 || this.h == null){
      this.h = 100;
    }
    if(this.w <= 0 || this.w == null){
      this.w = 100;
    }
  }
}
