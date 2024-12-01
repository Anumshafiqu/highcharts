import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudiochartsComponent } from './audiocharts.component';

describe('AudiochartsComponent', () => {
  let component: AudiochartsComponent;
  let fixture: ComponentFixture<AudiochartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AudiochartsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AudiochartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
