import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineStyleComponent } from './line-style.component';

describe('LineStyleComponent', () => {
  let component: LineStyleComponent;
  let fixture: ComponentFixture<LineStyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LineStyleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LineStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
