import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChristianComponent } from './christian.component';

describe('ChristianComponent', () => {
  let component: ChristianComponent;
  let fixture: ComponentFixture<ChristianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChristianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChristianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
