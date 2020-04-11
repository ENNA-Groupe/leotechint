import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeotechCorporateComponent } from './leotech-corporate.component';

describe('LeotechCorporateComponent', () => {
  let component: LeotechCorporateComponent;
  let fixture: ComponentFixture<LeotechCorporateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeotechCorporateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeotechCorporateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
