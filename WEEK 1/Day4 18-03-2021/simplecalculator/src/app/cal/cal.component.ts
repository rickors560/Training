import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cal',
  templateUrl: './cal.component.html',
  styleUrls: ['./cal.component.css']
})
export class CalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  h:number=50;
  w:number=100;
  a:number = 0;
  b:number = 0;
  res :number= 0;
  op: string='OP';
  add_n(){
    this.op = '+';
    
  };
  sub_n(){
    this.op = '-'
    
  };
  mul_n(){
    this.op = '*'
    
  };
  div_n(){
    this.op = '/'
    
  };
  mod_n(){
    this.op = '%'
  };
  go(){
    if(this.op === '+'){
      this.res = this.a + this.b;
    }
    if(this.op === '-'){
      this.res = this.a - this.b;
    }
    if(this.op === '*'){
      this.res = this.a * this.b;
    }
    if(this.op === '/'){
      this.res = this.a / this.b;
    }
    if(this.op === '%'){
      this.res = this.a % this.b;
    }
  };
  clear(){
    this.a = 0;
    this.b = 0;
    this.res = 0;
  };

}
