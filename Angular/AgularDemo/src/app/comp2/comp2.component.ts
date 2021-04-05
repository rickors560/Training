import { Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { IProduct } from '../products/IProduct';
import { ShareDataService } from '../share-data.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {

  constructor(private shareService:ShareDataService) { }
  p : IProduct;
  ngOnInit(): void {
    this.shareService.product$.subscribe(c => {
      this.p = c;
    });
  }
}
