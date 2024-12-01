import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SonificationChartsComponent } from './sonification-charts.component';

describe('SonificationChartsComponent', () => {
  let component: SonificationChartsComponent;
  let fixture: ComponentFixture<SonificationChartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SonificationChartsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SonificationChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
