import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckrouteComponent } from './checkroute.component';

describe('CheckrouteComponent', () => {
  let component: CheckrouteComponent;
  let fixture: ComponentFixture<CheckrouteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CheckrouteComponent]
    });
    fixture = TestBed.createComponent(CheckrouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
