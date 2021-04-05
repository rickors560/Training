import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-globalerrorhandler',
  templateUrl: './globalerrorhandler.component.html',
  styleUrls: ['./globalerrorhandler.component.css']
})
export class GlobalerrorhandlerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  er : any = undefined;
  generateError(){
    this.er.sort();
  }
}
