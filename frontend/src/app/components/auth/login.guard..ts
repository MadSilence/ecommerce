import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class LoginGuard implements CanActivate {
  
  constructor(private http: HttpClient, private router: Router) { }

  canActivate() {
    const token = localStorage.getItem("token");

    if (!token) {      
      this.router.navigate(['/login']);
      return false;
    } else  {
      let dataCheck;
      this.http.get("http://ecommerce-env.eba-2erxjxp5.eu-north-1.elasticbeanstalk.com/api/v1/authenticate", 
            {headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${localStorage.getItem("token")}`}, responseType: 'text'}).subscribe(data => {
            dataCheck = data;
          });
      if(dataCheck = 'authenticated') {
        return true
      } else {
        this.router.navigate(['/login']);
        return false
      }
    }
  }
}
