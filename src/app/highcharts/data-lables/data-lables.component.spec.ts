import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataLablesComponent } from './data-lables.component';

describe('DataLablesComponent', () => {
  let component: DataLablesComponent;
  let fixture: ComponentFixture<DataLablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DataLablesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DataLablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
