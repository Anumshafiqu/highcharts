import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomentranceComponent } from './customentrance.component';

describe('CustomentranceComponent', () => {
  let component: CustomentranceComponent;
  let fixture: ComponentFixture<CustomentranceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomentranceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomentranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
