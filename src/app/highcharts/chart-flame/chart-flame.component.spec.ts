import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartFlameComponent } from './chart-flame.component';

describe('ChartFlameComponent', () => {
  let component: ChartFlameComponent;
  let fixture: ComponentFixture<ChartFlameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChartFlameComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChartFlameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
