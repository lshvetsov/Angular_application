import {Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {BehaviorSubject, catchError, tap, throwError} from "rxjs";
import {User} from "../shared/user.model";
import {Router} from "@angular/router";
import {environment} from "../../environments/environment";

@Injectable()
export class AuthService {

  apiKey = environment.firebaseAPI;
  localStorageItemName = 'userData';

  signUpURL = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key='+this.apiKey;
  loginURL = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key='+this.apiKey;

  userSubject = new BehaviorSubject<User>(null);
  userTokenTimeout: any;

  constructor(private httpClient: HttpClient, private router: Router) {}

  signUp(email: string, password: string) {
    return this.httpClient.post<AuthResponse>(this.signUpURL, {
      "email": email,
      "password": password,
      "returnSecureToken": true
    }).pipe(
      catchError(this.handleErrors),
      tap(response => this.handleAuthentication(response.email, response.localId, response.idToken, +response.expiresIn))
    )
  }

  logIn(email: string, password: string) {
    return this.httpClient.post<AuthResponse>(this.loginURL, {
      "email": email,
      "password": password,
      "returnSecureToken": true
    }).pipe(
      catchError(this.handleErrors),
      tap(response => this.handleAuthentication(response.email, response.localId, response.idToken, +response.expiresIn))
    )
  }

  logout() {
    localStorage.removeItem(this.localStorageItemName);
    if (this.userTokenTimeout) {
      clearTimeout(this.userTokenTimeout);
    }
    this.userTokenTimeout = null;
    this.userSubject.next(null);
    this.router.navigate(['/auth']);
  }

  autoLogin() {
    const userData: {
      'email': string,
      'id': string,
      '_token': string,
      'tokenExpirationDate': string
    } = JSON.parse(localStorage.getItem(this.localStorageItemName));

    if (!userData) {
      return;
    }

    const expirationDate = new Date(userData.tokenExpirationDate);
    const loadedUser: User = new User(userData.email, userData.id, userData._token, expirationDate);

    if (loadedUser.token) {
      const expirationInMillisec = expirationDate.getTime() - new Date().getTime();
      console.log(expirationInMillisec);
      this.autoLogout(expirationInMillisec);
      this.userSubject.next(loadedUser);
    }
  }

  autoLogout(expirationTime: number) {
    this.userTokenTimeout = setTimeout(() => {
      this.logout();
    }, expirationTime);
  }

  private handleErrors(errorResponse: HttpErrorResponse) {
    let defaultErrorTemplate = 'Error: ';
    if (!errorResponse.error || !errorResponse.error.error) {
      return throwError(defaultErrorTemplate + "Undefined error")
    }
    return throwError(defaultErrorTemplate + errorResponse.error.error.message)
  }

  private handleAuthentication(email: string, userId: string, token: string, expiresIn: number) {
    const expirationInMillisec = expiresIn * 1000;
    console.log(expirationInMillisec);
    const expirationDate = new Date(new Date().getTime() + expirationInMillisec);
    const user = new User(email, userId, token, expirationDate);
    this.autoLogout(expirationInMillisec);
    this.userSubject.next(user);
    localStorage.setItem(this.localStorageItemName, JSON.stringify(user))
  }
}

export interface AuthResponse {
  kind: string,
  idToken: string,
  email: string,
  refreshToken: string
  expiresIn: string
  localId: string
  registered?: boolean
}
