import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(register: NgForm) {
    console.log(register.value);  // { username: '',email: '', password: '' }
    console.log(register.valid);  // false
  }

}
