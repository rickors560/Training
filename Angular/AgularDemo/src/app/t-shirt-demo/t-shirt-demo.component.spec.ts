import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TShirtDemoComponent } from './t-shirt-demo.component';

describe('TShirtDemoComponent', () => {
  let component: TShirtDemoComponent;
  let fixture: ComponentFixture<TShirtDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TShirtDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TShirtDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
