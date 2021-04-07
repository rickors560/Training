import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BehaviorsubjectComComponent } from './behaviorsubject-com.component';

describe('BehaviorsubjectComComponent', () => {
  let component: BehaviorsubjectComComponent;
  let fixture: ComponentFixture<BehaviorsubjectComComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BehaviorsubjectComComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BehaviorsubjectComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
