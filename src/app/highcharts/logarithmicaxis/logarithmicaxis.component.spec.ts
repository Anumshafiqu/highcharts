import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogarithmicaxisComponent } from './logarithmicaxis.component';

describe('LogarithmicaxisComponent', () => {
  let component: LogarithmicaxisComponent;
  let fixture: ComponentFixture<LogarithmicaxisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LogarithmicaxisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LogarithmicaxisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
