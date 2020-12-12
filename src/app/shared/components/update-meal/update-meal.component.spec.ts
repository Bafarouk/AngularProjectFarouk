import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMealComponent } from './update-meal.component';

describe('UpdateMealComponent', () => {
  let component: UpdateMealComponent;
  let fixture: ComponentFixture<UpdateMealComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateMealComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateMealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
