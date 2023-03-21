import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';


@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    
  })
  export class SignupComponent {
    signupForm: FormGroup;
    isSubmitting = false;
  
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) {
    this.signupForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      firstname: ['', [Validators.required]],
      secondname: ['', [Validators.required]],
      password: ['', [Validators.required]],
      secondpassword: ['', [Validators.required]]
    });
  }

  onSubmit() {
    if (this.signupForm.invalid) {
      return;
    }

    this.isSubmitting = true;

    this.register().pipe(
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

  register(): Observable<void> {
    const { email, firstname, secondname, password, secondpassword } = this.signupForm.value;
    const url = 'http://ecommerce-env.eba-2erxjxp5.eu-north-1.elasticbeanstalk.com/api/v1/auth/register';
    const data = {
      "firstname": firstname,
      "secondname": secondname,
      "email": email,
      "password": password
    };


    console.log(data);
    
    this.http.post<any>(url, data).subscribe(data => {
      if(data.token) {
        console.log(`Logging in with email ${email} and password ${password}`);
        localStorage.setItem("token", data.token)
        this.router.navigate(['/']);
      } else {
        console.log(`Your data is not valid. Please try again`)
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