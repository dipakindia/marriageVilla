import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPersonalInfoComponent } from './add-personal-info.component';

describe('AddPersonalInfoComponent', () => {
  let component: AddPersonalInfoComponent;
  let fixture: ComponentFixture<AddPersonalInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPersonalInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPersonalInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
