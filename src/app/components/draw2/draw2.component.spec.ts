import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Draw2Component } from './draw2.component';

describe('Draw2Component', () => {
  let component: Draw2Component;
  let fixture: ComponentFixture<Draw2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Draw2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Draw2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
