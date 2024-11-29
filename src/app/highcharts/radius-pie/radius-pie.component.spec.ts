import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadiusPieComponent } from './radius-pie.component';

describe('RadiusPieComponent', () => {
  let component: RadiusPieComponent;
  let fixture: ComponentFixture<RadiusPieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RadiusPieComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RadiusPieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
