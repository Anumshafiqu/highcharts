import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoseWindComponent } from './rose-wind.component';

describe('RoseWindComponent', () => {
  let component: RoseWindComponent;
  let fixture: ComponentFixture<RoseWindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RoseWindComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RoseWindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
