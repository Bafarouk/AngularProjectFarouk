import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  test: boolean;

  constructor( private authService: AuthService , private router : Router) { }

  ngOnInit(): void {
    this.test = this.authService.currentUserValue();

  }
  
 
  

  logout(){
    this.authService.logout();
    this.router.navigate(['']);
  }

}
