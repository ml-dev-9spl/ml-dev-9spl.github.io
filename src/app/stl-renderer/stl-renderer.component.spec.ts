import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StlRendererComponent } from './stl-renderer.component';

describe('StlRendererComponent', () => {
  let component: StlRendererComponent;
  let fixture: ComponentFixture<StlRendererComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StlRendererComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StlRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
