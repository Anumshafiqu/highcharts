import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapInterpolationHeatComponent } from './map-interpolation-heat.component';

describe('MapInterpolationHeatComponent', () => {
  let component: MapInterpolationHeatComponent;
  let fixture: ComponentFixture<MapInterpolationHeatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MapInterpolationHeatComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MapInterpolationHeatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
