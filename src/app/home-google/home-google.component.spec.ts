import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeGoogleComponent } from './home-google.component';

describe('HomeGoogleComponent', () => {
  let component: HomeGoogleComponent;
  let fixture: ComponentFixture<HomeGoogleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeGoogleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeGoogleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
