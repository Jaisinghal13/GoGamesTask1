import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Homepage22Component } from './homepage22.component';

describe('Homepage22Component', () => {
  let component: Homepage22Component;
  let fixture: ComponentFixture<Homepage22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Homepage22Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Homepage22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
