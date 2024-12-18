import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulletgrpahComponent } from './bulletgrpah.component';

describe('BulletgrpahComponent', () => {
  let component: BulletgrpahComponent;
  let fixture: ComponentFixture<BulletgrpahComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BulletgrpahComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BulletgrpahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
