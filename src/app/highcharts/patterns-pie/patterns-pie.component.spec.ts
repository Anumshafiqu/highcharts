import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatternsPieComponent } from './patterns-pie.component';

describe('PatternsPieComponent', () => {
  let component: PatternsPieComponent;
  let fixture: ComponentFixture<PatternsPieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PatternsPieComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PatternsPieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
