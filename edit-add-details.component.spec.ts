import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAddDetailsComponent } from './edit-add-details.component';

describe('EditAddDetailsComponent', () => {
  let component: EditAddDetailsComponent;
  let fixture: ComponentFixture<EditAddDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAddDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAddDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
