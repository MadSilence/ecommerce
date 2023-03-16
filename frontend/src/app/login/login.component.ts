import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
   
  })

  export class LoginComponent {
    loginForm: FormGroup;
    isSubmitting = false;

    constructor(private fb: FormBuilder) {
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
      const data = {
        "email": email,
        "password": password
      };
      console.log(data);
      console.log(`Logging in with email ${email} and password ${password}`);
  
      return new Observable((observer) => {
        // Simulate a delay of 1 second
        setTimeout(() => {
          observer.next();
          observer.complete();
        }, 1000);
      });
    }
  } 