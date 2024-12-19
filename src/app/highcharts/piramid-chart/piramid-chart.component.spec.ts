import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiramidChartComponent } from './piramid-chart.component';

describe('PiramidChartComponent', () => {
  let component: PiramidChartComponent;
  let fixture: ComponentFixture<PiramidChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PiramidChartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PiramidChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
