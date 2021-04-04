import { Component, OnInit } from '@angular/core';
import { LogService } from '../log.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

  constructor(private logservice:LogService) { }
  title:string;
  ngOnInit(): void {
    this.title = this.logservice.sayHello("Child 2");
  }
}
