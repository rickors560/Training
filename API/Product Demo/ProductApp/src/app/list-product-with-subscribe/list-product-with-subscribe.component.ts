import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../IProduct';

@Component({
  selector: 'app-list-product-with-subscribe',
  templateUrl: './list-product-with-subscribe.component.html',
  styleUrls: ['./list-product-with-subscribe.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListProductWithSubscribeComponent implements OnInit, OnChanges {
  @Input() myproducts$: Observable<IProduct[]>;
  @Output() deleteEventEmitter: EventEmitter<number>;
  myproducts: IProduct[];

  constructor(private cd: ChangeDetectorRef) {
    this.deleteEventEmitter = new EventEmitter<number>();
    this.myproducts = [];
  }

  ngOnInit(): void {
    this.subscribeData();
  }

  // difference b/w async pipe and subscribe , best to use async on OnPush strategy
  ngOnChanges(changes: SimpleChanges): void {  // to make delete changes reflect so that we dont have to refresh
    this.subscribeData();
  }

  subscribeData() {
    this.myproducts$.subscribe(
      data => {
        this.myproducts = data
        this.cd.markForCheck();
      }
    );
  }

  delete(id: number) {
    this.deleteEventEmitter.emit(id);
  }
}