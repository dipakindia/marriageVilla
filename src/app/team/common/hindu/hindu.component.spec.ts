import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HinduComponent } from './hindu.component';

describe('HinduComponent', () => {
  let component: HinduComponent;
  let fixture: ComponentFixture<HinduComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HinduComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HinduComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
