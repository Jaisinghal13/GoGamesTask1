import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarphotoComponent } from './navbarphoto.component';

describe('NavbarphotoComponent', () => {
  let component: NavbarphotoComponent;
  let fixture: ComponentFixture<NavbarphotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarphotoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarphotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
