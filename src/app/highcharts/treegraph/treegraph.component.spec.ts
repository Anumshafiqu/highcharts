import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreegraphComponent } from './treegraph.component';

describe('TreegraphComponent', () => {
  let component: TreegraphComponent;
  let fixture: ComponentFixture<TreegraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TreegraphComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TreegraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
