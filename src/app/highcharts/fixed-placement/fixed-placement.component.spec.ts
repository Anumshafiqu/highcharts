import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixedPlacementComponent } from './fixed-placement.component';

describe('FixedPlacementComponent', () => {
  let component: FixedPlacementComponent;
  let fixture: ComponentFixture<FixedPlacementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FixedPlacementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FixedPlacementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
