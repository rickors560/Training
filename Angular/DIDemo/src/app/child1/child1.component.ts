import { Component, OnInit } from '@angular/core';
import { LogService } from '../log.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css'],
})
export class Child1Component implements OnInit {

  constructor(private logservice:LogService) { }
  title:string;
  ngOnInit(): void {
    this.title = this.logservice.sayHello("Child 1");
  }
}
