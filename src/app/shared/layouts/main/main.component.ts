import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

    
  user : any  =  JSON.parse(localStorage.getItem('currentUser'));

  constructor() { }
  
  ngOnInit(): void {
    
    
  }

  

}
