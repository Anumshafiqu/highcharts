import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArcdiagramComponent } from './arcdiagram.component';

describe('ArcdiagramComponent', () => {
  let component: ArcdiagramComponent;
  let fixture: ComponentFixture<ArcdiagramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArcdiagramComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArcdiagramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
