import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnewproductComponent } from './addnewproduct.component';

describe('AddnewproductComponent', () => {
  let component: AddnewproductComponent;
  let fixture: ComponentFixture<AddnewproductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddnewproductComponent]
    });
    fixture = TestBed.createComponent(AddnewproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
