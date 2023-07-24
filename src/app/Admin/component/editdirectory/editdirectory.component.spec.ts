import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditdirectoryComponent } from './editdirectory.component';

describe('EditdirectoryComponent', () => {
  let component: EditdirectoryComponent;
  let fixture: ComponentFixture<EditdirectoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditdirectoryComponent]
    });
    fixture = TestBed.createComponent(EditdirectoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
