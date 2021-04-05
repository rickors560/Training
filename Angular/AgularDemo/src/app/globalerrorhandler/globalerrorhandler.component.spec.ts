import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalerrorhandlerComponent } from './globalerrorhandler.component';

describe('GlobalerrorhandlerComponent', () => {
  let component: GlobalerrorhandlerComponent;
  let fixture: ComponentFixture<GlobalerrorhandlerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlobalerrorhandlerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalerrorhandlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
