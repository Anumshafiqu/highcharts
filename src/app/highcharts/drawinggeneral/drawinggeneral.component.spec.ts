import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawinggeneralComponent } from './drawinggeneral.component';

describe('DrawinggeneralComponent', () => {
  let component: DrawinggeneralComponent;
  let fixture: ComponentFixture<DrawinggeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DrawinggeneralComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DrawinggeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
