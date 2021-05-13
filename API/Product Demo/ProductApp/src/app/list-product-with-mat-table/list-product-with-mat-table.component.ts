import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../IProduct';

@Component({
  selector: 'app-list-product-with-mat-table',
  templateUrl: './list-product-with-mat-table.component.html',
  styleUrls: ['./list-product-with-mat-table.component.css']
})
export class ListProductWithMatTableComponent implements OnInit {
  @Input() myproducts$: Observable<IProduct[]>;
  @Output() deleteEventEmitter: EventEmitter<number>;

  displayedColumns: string[] = ['ID', 'Title', 'Price', 'Quantity', 'Color', 'ExpiryDate', 'InStock', 'Actions'];

  constructor() {
    this.deleteEventEmitter = new EventEmitter<number>();
  }

  ngOnInit(): void {
  }

  delete(id: number) {
    this.deleteEventEmitter.emit(id);
  }
}
