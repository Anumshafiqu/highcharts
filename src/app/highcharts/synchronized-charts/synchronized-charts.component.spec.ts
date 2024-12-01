import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SynchronizedChartsComponent } from './synchronized-charts.component';

describe('SynchronizedChartsComponent', () => {
  let component: SynchronizedChartsComponent;
  let fixture: ComponentFixture<SynchronizedChartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SynchronizedChartsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SynchronizedChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
