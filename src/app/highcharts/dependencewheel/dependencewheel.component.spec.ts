import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DependencewheelComponent } from './dependencewheel.component';

describe('DependencewheelComponent', () => {
  let component: DependencewheelComponent;
  let fixture: ComponentFixture<DependencewheelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DependencewheelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DependencewheelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
