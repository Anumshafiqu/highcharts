import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterpolationmapComponent } from './interpolationmap.component';

describe('InterpolationmapComponent', () => {
  let component: InterpolationmapComponent;
  let fixture: ComponentFixture<InterpolationmapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InterpolationmapComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InterpolationmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
