import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeuralChartComponent } from './neural-chart.component';

describe('NeuralChartComponent', () => {
  let component: NeuralChartComponent;
  let fixture: ComponentFixture<NeuralChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NeuralChartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NeuralChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
