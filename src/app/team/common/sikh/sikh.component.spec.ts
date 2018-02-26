import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SikhComponent } from './sikh.component';

describe('SikhComponent', () => {
  let component: SikhComponent;
  let fixture: ComponentFixture<SikhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SikhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SikhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
