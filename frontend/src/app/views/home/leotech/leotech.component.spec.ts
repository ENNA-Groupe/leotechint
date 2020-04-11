import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeotechComponent } from './leotech.component';

describe('LeotechComponent', () => {
  let component: LeotechComponent;
  let fixture: ComponentFixture<LeotechComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeotechComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeotechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
