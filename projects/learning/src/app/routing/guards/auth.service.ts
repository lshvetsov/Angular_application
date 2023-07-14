import {Injectable} from "@angular/core";

@Injectable()
export class AuthService {

  loggedIn = false;

  isAuthenticated() {
    return new Promise<boolean>(
      (resolve, reject) => {
        setTimeout(() => resolve(this.loggedIn), 800)
      }
    );

  }

  logIn() {
    this.loggedIn = true;
  }

  logOut() {
    this.loggedIn = false;
  }

}
