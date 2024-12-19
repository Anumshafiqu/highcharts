import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriesRangeComponent } from './series-range.component';

describe('SeriesRangeComponent', () => {
  let component: SeriesRangeComponent;
  let fixture: ComponentFixture<SeriesRangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SeriesRangeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SeriesRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
