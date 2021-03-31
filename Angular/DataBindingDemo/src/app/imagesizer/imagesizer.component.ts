import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imagesizer',
  templateUrl: './imagesizer.component.html',
  styleUrls: ['./imagesizer.component.css']
})
export class ImagesizerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  h:number = 200;
  w:number = 200;
  imgSource:string = '../assets/front.jpg';
  setdefault(){
    this.h = 100;
    this.w = 100;
  }
  onhover():void{
    this.imgSource = "../assets/back.jpg";
  }
  onhoverout():void{
    this.imgSource = '../assets/front.jpg';
  }
}
