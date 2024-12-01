import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessiblechartsComponent } from './accessiblecharts.component';

describe('AccessiblechartsComponent', () => {
  let component: AccessiblechartsComponent;
  let fixture: ComponentFixture<AccessiblechartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccessiblechartsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccessiblechartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
