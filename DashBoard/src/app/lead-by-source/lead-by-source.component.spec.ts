import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadBySourceComponent } from './lead-by-source.component';

describe('LeadBySourceComponent', () => {
  let component: LeadBySourceComponent;
  let fixture: ComponentFixture<LeadBySourceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeadBySourceComponent]
    });
    fixture = TestBed.createComponent(LeadBySourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
