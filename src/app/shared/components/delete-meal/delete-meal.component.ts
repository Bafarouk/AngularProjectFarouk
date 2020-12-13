import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { MealService } from '../../services/meal.service';

@Component({
  selector: 'app-delete-meal',
  templateUrl: './delete-meal.component.html',
  styleUrls: ['./delete-meal.component.css']
})
export class DeleteMealComponent implements OnInit {

  @Input() mealModelDel;

  constructor(private mealService: MealService, public modal: NgbActiveModal) { }

  ngOnInit(): void {
    console.log(this.mealModelDel);
    console.log(this.mealModelDel.id);

   
  }

  delete(){

    console.log(this.mealModelDel.id);
    this.mealService.deleteMeal(this.mealModelDel.id).subscribe(data => {

      console.log(data);
      console.log("delete OK");
    });

    this.modal.close();
    window.location.reload();

  }

}
