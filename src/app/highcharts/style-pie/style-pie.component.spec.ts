import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StylePieComponent } from './style-pie.component';

describe('StylePieComponent', () => {
  let component: StylePieComponent;
  let fixture: ComponentFixture<StylePieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StylePieComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StylePieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
