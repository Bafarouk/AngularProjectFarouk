import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { User } from '../models/User';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }

  constructor( private httpClient: HttpClient, private router: Router) { }

  currentUserValue() {
    if( localStorage.getItem('currentUser') !== null ){
     console.log(localStorage.getItem('currentUser'));
     return true;
    }else{
    return false;
  }
}




  login(email:string, password:string) {
    return this.httpClient.get('/api/users?email='+email+'&password='+password).subscribe((response: any) => {
      if(response && response.length > 0){
        console.log("login successs ");
        localStorage.setItem('currentUser',JSON.stringify(response));
        this.router.navigate(['/main']);
        return true;
      }else{
        console.log("your not registred yet !");
        return false;
      }
    },(error) => {
      if(error.status == 400){
         console.log("your not registred yet !");
      }else if(error.status == 404){
         console.log("data invalid");
      }
    })
}

register(user : User){
  return this.httpClient.post<User>('/api/users', user, this.httpOptions)
}


logout() {
  localStorage.removeItem('currentUser');
  this.router.navigate(['/body']);
  
  
}

}

