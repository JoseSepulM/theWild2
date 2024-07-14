import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarContentUserComponent } from './navbar-content-user.component';

describe('NavbarContentUserComponent', () => {
  let component: NavbarContentUserComponent;
  let fixture: ComponentFixture<NavbarContentUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarContentUserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarContentUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
