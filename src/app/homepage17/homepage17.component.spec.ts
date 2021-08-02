import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Homepage17Component } from './homepage17.component';

describe('Homepage17Component', () => {
  let component: Homepage17Component;
  let fixture: ComponentFixture<Homepage17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Homepage17Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Homepage17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
