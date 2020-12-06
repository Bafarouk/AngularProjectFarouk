import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/models/User';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User = new User();

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(register: NgForm) {
    const registerObservable = {
      next: x => console.log('user created'),
      error: err => console.log(err)
    };
    this.authService.register(this.user).subscribe(registerObservable);
    this.router.navigateByUrl('/login');
    
  }

}
