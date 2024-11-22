import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StakedareaComponent } from './stakedarea.component';

describe('StakedareaComponent', () => {
  let component: StakedareaComponent;
  let fixture: ComponentFixture<StakedareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StakedareaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StakedareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
