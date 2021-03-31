import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagesizerComponent } from './imagesizer.component';

describe('ImagesizerComponent', () => {
  let component: ImagesizerComponent;
  let fixture: ComponentFixture<ImagesizerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagesizerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagesizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
