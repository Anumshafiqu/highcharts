import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicColumnComponent } from './basic-column.component';

describe('BasicColumnComponent', () => {
  let component: BasicColumnComponent;
  let fixture: ComponentFixture<BasicColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BasicColumnComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BasicColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
