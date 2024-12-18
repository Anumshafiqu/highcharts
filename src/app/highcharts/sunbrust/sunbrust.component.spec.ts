import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SunbrustComponent } from './sunbrust.component';

describe('SunbrustComponent', () => {
  let component: SunbrustComponent;
  let fixture: ComponentFixture<SunbrustComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SunbrustComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SunbrustComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
