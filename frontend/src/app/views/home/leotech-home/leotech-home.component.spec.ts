import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeotechHomeComponent } from './leotech-home.component';

describe('LeotechHomeComponent', () => {
  let component: LeotechHomeComponent;
  let fixture: ComponentFixture<LeotechHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeotechHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeotechHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
