import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PieGradientComponent } from './pie-gradient.component';

describe('PieGradientComponent', () => {
  let component: PieGradientComponent;
  let fixture: ComponentFixture<PieGradientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PieGradientComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PieGradientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
