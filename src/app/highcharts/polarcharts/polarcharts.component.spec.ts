import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolarchartsComponent } from './polarcharts.component';

describe('PolarchartsComponent', () => {
  let component: PolarchartsComponent;
  let fixture: ComponentFixture<PolarchartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PolarchartsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PolarchartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
