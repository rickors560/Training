import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProductWithMatTableComponent } from './list-product-with-mat-table.component';

describe('ListProductWithMatTableComponent', () => {
  let component: ListProductWithMatTableComponent;
  let fixture: ComponentFixture<ListProductWithMatTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListProductWithMatTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListProductWithMatTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
