import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleKPIgaugeComponent } from './multiple-kpigauge.component';

describe('MultipleKPIgaugeComponent', () => {
  let component: MultipleKPIgaugeComponent;
  let fixture: ComponentFixture<MultipleKPIgaugeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MultipleKPIgaugeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MultipleKPIgaugeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
