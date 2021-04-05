import { Component, DoCheck, OnInit } from '@angular/core';
import { ShareDataService } from '../share-data.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {

  constructor(private shareService:ShareDataService) { }
  data : number = 0 ;
  ngOnInit(): void {
  }
  setData(){
    this.shareService.setPrice(this.data)
  }
}