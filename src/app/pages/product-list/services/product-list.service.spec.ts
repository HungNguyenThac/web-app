import { TestBed } from '@angular/core/testing';

import { MenuLv3Service } from './menu-lv3.service';

describe('MenuLv3Service', () => {
  let service: MenuLv3Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenuLv3Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
