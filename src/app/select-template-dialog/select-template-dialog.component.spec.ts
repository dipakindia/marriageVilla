import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectTemplateDialogComponent } from './select-template-dialog.component';

describe('SelectTemplateDialogComponent', () => {
  let component: SelectTemplateDialogComponent;
  let fixture: ComponentFixture<SelectTemplateDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectTemplateDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectTemplateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
