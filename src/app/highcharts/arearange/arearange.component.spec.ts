import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArearangeComponent } from './arearange.component';

describe('ArearangeComponent', () => {
  let component: ArearangeComponent;
  let fixture: ComponentFixture<ArearangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArearangeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArearangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
