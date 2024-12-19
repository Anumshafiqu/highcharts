import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarbComponent } from './barb.component';

describe('BarbComponent', () => {
  let component: BarbComponent;
  let fixture: ComponentFixture<BarbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BarbComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BarbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
