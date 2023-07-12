import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MathangComponent } from './mathang.component';

describe('MathangComponent', () => {
  let component: MathangComponent;
  let fixture: ComponentFixture<MathangComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MathangComponent]
    });
    fixture = TestBed.createComponent(MathangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
