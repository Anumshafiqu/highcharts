import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScatterBubbleComponent } from './scatter-bubble.component';

describe('ScatterBubbleComponent', () => {
  let component: ScatterBubbleComponent;
  let fixture: ComponentFixture<ScatterBubbleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScatterBubbleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScatterBubbleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
