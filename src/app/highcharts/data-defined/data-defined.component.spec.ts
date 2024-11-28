import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataDefinedComponent } from './data-defined.component';

describe('DataDefinedComponent', () => {
  let component: DataDefinedComponent;
  let fixture: ComponentFixture<DataDefinedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DataDefinedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DataDefinedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
