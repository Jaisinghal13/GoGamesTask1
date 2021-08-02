import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Homepage19Component } from './homepage19.component';

describe('Homepage19Component', () => {
  let component: Homepage19Component;
  let fixture: ComponentFixture<Homepage19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Homepage19Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Homepage19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
