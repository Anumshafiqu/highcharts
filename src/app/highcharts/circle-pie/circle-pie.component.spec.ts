import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CirclePieComponent } from './circle-pie.component';

describe('CirclePieComponent', () => {
  let component: CirclePieComponent;
  let fixture: ComponentFixture<CirclePieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CirclePieComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CirclePieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
