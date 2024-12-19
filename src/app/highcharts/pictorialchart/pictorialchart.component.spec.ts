import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PictorialchartComponent } from './pictorialchart.component';

describe('PictorialchartComponent', () => {
  let component: PictorialchartComponent;
  let fixture: ComponentFixture<PictorialchartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PictorialchartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PictorialchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
