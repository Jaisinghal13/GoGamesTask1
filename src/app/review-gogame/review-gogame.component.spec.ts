import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewGogameComponent } from './review-gogame.component';

describe('ReviewGogameComponent', () => {
  let component: ReviewGogameComponent;
  let fixture: ComponentFixture<ReviewGogameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewGogameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewGogameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
