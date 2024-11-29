import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PieDrilldownComponent } from './pie-drilldown.component';

describe('PieDrilldownComponent', () => {
  let component: PieDrilldownComponent;
  let fixture: ComponentFixture<PieDrilldownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PieDrilldownComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PieDrilldownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
