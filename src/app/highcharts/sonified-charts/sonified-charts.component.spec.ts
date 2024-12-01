import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SonifiedChartsComponent } from './sonified-charts.component';

describe('SonifiedChartsComponent', () => {
  let component: SonifiedChartsComponent;
  let fixture: ComponentFixture<SonifiedChartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SonifiedChartsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SonifiedChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
