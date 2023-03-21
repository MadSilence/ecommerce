import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
   
  })

  export class LoginComponent {
    loginForm: FormGroup;
    isSubmitting = false;

    constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {
      this.loginForm = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required],
      });
    }

    onSubmit() {
      if (this.loginForm.invalid) {
        return;
      }
  
      this.isSubmitting = true;
  
      this.login().pipe(
        tap(() => {
          this.isSubmitting = false;
        })
      ).subscribe(
        () => {
          console.log('Logged in successfully!');
        },
        (error) => {
          console.error('Error logging in:', error);
        }
      );
    }

    login(): Observable<void> {
      const { email, password } = this.loginForm.value;
      const url = 'http://ecommerce-env.eba-2erxjxp5.eu-north-1.elasticbeanstalk.com/api/v1/auth/login';
      const data = {
        "email": email,
        "password": password
      };
      
      this.http.post<any>(url, data).subscribe(data => {
        if(data.token) {
          localStorage.setItem("token", data.token)
          this.router.navigate(['/cart']);
        } else {
          console.log(`Your password or login is incorrect! Please try again.`)
        }
      });
  
      return new Observable((observer) => {
        // Simulate a delay of 1 second
        setTimeout(() => {
          observer.next();
          observer.complete();
        }, 1000);
      });
    }
  } 