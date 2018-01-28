import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentTemplateComponent } from './payment-template.component';

describe('PaymentTemplateComponent', () => {
  let component: PaymentTemplateComponent;
  let fixture: ComponentFixture<PaymentTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
