import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadByIndustriesComponent } from './lead-by-industries.component';

describe('LeadByIndustriesComponent', () => {
  let component: LeadByIndustriesComponent;
  let fixture: ComponentFixture<LeadByIndustriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeadByIndustriesComponent]
    });
    fixture = TestBed.createComponent(LeadByIndustriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
