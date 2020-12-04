import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  onSubmit(f: NgForm) {
    console.log(f.value);  // { username: '', password: '' }
    console.log(f.valid);  // false
  }
}
