import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../IProduct';

@Component({
  selector: 'app-list-product-with-async',
  templateUrl: './list-product-with-async.component.html',
  styleUrls: ['./list-product-with-async.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListProductWithAsyncComponent implements OnInit {
  @Input() myproducts$: Observable<IProduct[]>;
  @Output() deleteEventEmitter: EventEmitter<number>;

  constructor() {
    this.deleteEventEmitter = new EventEmitter<number>();
  }

  ngOnInit(): void {
  }

  delete(id: number) {
    this.deleteEventEmitter.emit(id);
  }
}