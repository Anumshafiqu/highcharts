import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PieLegendComponent } from './pie-legend.component';

describe('PieLegendComponent', () => {
  let component: PieLegendComponent;
  let fixture: ComponentFixture<PieLegendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PieLegendComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PieLegendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
