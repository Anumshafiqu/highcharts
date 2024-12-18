import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeuuDiagramComponent } from './veuu-diagram.component';

describe('VeuuDiagramComponent', () => {
  let component: VeuuDiagramComponent;
  let fixture: ComponentFixture<VeuuDiagramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VeuuDiagramComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VeuuDiagramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
