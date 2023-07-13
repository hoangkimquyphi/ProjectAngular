import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BangComponent } from './bang.component';

describe('BangComponent', () => {
  let component: BangComponent;
  let fixture: ComponentFixture<BangComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BangComponent]
    });
    fixture = TestBed.createComponent(BangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
