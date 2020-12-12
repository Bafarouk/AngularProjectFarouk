import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchMealByCategoryComponent } from './search-meal-by-category.component';

describe('SearchMealByCategoryComponent', () => {
  let component: SearchMealByCategoryComponent;
  let fixture: ComponentFixture<SearchMealByCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchMealByCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchMealByCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
