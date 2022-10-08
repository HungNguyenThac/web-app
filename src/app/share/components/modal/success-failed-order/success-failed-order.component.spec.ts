import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessFailedOrderComponent } from './success-failed-order.component';

describe('SuccessFailedOrderComponent', () => {
  let component: SuccessFailedOrderComponent;
  let fixture: ComponentFixture<SuccessFailedOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccessFailedOrderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuccessFailedOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
