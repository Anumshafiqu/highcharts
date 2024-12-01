import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnPieComponent } from './column-pie.component';

describe('ColumnPieComponent', () => {
  let component: ColumnPieComponent;
  let fixture: ComponentFixture<ColumnPieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ColumnPieComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ColumnPieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
