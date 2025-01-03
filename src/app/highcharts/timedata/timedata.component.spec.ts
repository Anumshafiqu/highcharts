import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimedataComponent } from './timedata.component';

describe('TimedataComponent', () => {
  let component: TimedataComponent;
  let fixture: ComponentFixture<TimedataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TimedataComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TimedataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
