import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMealByUserComponent } from './view-meal-by-user.component';

describe('ViewMealByUserComponent', () => {
  let component: ViewMealByUserComponent;
  let fixture: ComponentFixture<ViewMealByUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewMealByUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMealByUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
