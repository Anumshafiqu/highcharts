import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplinesymboleComponent } from './splinesymbole.component';

describe('SplinesymboleComponent', () => {
  let component: SplinesymboleComponent;
  let fixture: ComponentFixture<SplinesymboleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SplinesymboleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SplinesymboleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
