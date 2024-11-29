import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DualLineColumnComponent } from './dual-line-column.component';

describe('DualLineColumnComponent', () => {
  let component: DualLineColumnComponent;
  let fixture: ComponentFixture<DualLineColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DualLineColumnComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DualLineColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
