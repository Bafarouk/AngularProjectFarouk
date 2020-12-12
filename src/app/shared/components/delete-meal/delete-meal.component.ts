import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-delete-meal',
  templateUrl: './delete-meal.component.html',
  styleUrls: ['./delete-meal.component.css']
})
export class DeleteMealComponent implements OnInit {

  mealId = 0 ;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(data => {
      this.mealId = data.id;
    })
  }

}
