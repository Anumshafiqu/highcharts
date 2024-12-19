import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharttimelineComponent } from './charttimeline.component';

describe('CharttimelineComponent', () => {
  let component: CharttimelineComponent;
  let fixture: ComponentFixture<CharttimelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CharttimelineComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CharttimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
