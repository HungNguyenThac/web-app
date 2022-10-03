import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuLv3Component } from './menu-lv3.component';

describe('MenuLv3Component', () => {
  let component: MenuLv3Component;
  let fixture: ComponentFixture<MenuLv3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuLv3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuLv3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
