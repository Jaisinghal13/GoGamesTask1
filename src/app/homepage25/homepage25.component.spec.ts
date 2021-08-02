import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Homepage25Component } from './homepage25.component';

describe('Homepage25Component', () => {
  let component: Homepage25Component;
  let fixture: ComponentFixture<Homepage25Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Homepage25Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Homepage25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
