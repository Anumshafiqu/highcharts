import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StyledmodeComponent } from './styledmode.component';

describe('StyledmodeComponent', () => {
  let component: StyledmodeComponent;
  let fixture: ComponentFixture<StyledmodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StyledmodeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StyledmodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
