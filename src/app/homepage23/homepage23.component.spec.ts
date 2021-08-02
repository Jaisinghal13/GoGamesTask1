import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Homepage23Component } from './homepage23.component';

describe('Homepage23Component', () => {
  let component: Homepage23Component;
  let fixture: ComponentFixture<Homepage23Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Homepage23Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Homepage23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
