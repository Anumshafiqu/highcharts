import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParetochartComponent } from './paretochart.component';

describe('ParetochartComponent', () => {
  let component: ParetochartComponent;
  let fixture: ComponentFixture<ParetochartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ParetochartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ParetochartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
