import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReplaysubjectComComponent } from './replaysubject-com.component';

describe('ReplaysubjectComComponent', () => {
  let component: ReplaysubjectComComponent;
  let fixture: ComponentFixture<ReplaysubjectComComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReplaysubjectComComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReplaysubjectComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
