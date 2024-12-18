import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LargetreemapComponent } from './largetreemap.component';

describe('LargetreemapComponent', () => {
  let component: LargetreemapComponent;
  let fixture: ComponentFixture<LargetreemapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LargetreemapComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LargetreemapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
