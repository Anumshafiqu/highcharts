import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StackedPercentageColumnComponent } from './stacked-percentage-column.component';

describe('StackedPercentageColumnComponent', () => {
  let component: StackedPercentageColumnComponent;
  let fixture: ComponentFixture<StackedPercentageColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StackedPercentageColumnComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StackedPercentageColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
