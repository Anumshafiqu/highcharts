import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicchartsComponent } from './dynamiccharts.component';

describe('DynamicchartsComponent', () => {
  let component: DynamicchartsComponent;
  let fixture: ComponentFixture<DynamicchartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DynamicchartsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DynamicchartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
