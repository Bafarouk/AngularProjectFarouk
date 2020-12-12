import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllMealComponent } from './view-all-meal.component';

describe('ViewAllMealComponent', () => {
  let component: ViewAllMealComponent;
  let fixture: ComponentFixture<ViewAllMealComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAllMealComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllMealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
