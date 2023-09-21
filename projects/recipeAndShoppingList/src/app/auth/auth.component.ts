import {Component, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthResponse, AuthService} from "../shared/services/auth.service";
import {Observable} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html'
})
export class AuthComponent {

  constructor(private authService: AuthService, private router: Router) {}

  @ViewChild('form') authForm: NgForm

  isLoginMode: boolean = true;
  isLoading: boolean = false;
  error: string = null;

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
    this.error = null;
  }

  onSubmitForm() {
    if (this.authForm.invalid) return;

    let authObservable: Observable<AuthResponse>;
    const email = this.authForm.value.email;
    const password = this.authForm.value.password

    this.isLoading = true;
    if (this.isLoginMode) {
      authObservable = this.authService.logIn(email, password);
    } else {
      authObservable = this.authService.signUp(email, password);
    }

    authObservable.subscribe(
      response => {
        console.log(response);
        this.isLoading = false;
        this.router.navigate(['/recipes']);
      },
      errorMessage => {
        console.log(errorMessage);
        this.error = errorMessage
        this.isLoading = false
      })

    this.authForm.reset();
  }

  onErrorHandling() {
    this.error = null;
  }

}
