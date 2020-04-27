import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAddDetails2Component } from './edit-add-details2.component';

describe('EditAddDetails2Component', () => {
  let component: EditAddDetails2Component;
  let fixture: ComponentFixture<EditAddDetails2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAddDetails2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAddDetails2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
