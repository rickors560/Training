import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsyncsubjectComComponent } from './asyncsubject-com.component';

describe('AsyncsubjectComComponent', () => {
  let component: AsyncsubjectComComponent;
  let fixture: ComponentFixture<AsyncsubjectComComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsyncsubjectComComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsyncsubjectComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
