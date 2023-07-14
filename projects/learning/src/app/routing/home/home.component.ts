import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../guards/auth.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private router: Router, private authService: AuthService) { }

  onLoadServers() {
    this.router.navigate(['/servers', 5, 'edit'], {queryParams: {allowEdit: '1'}});
  }

  onLogin() {
    this.authService.logIn();
  }

  onLogout() {
    this.authService.logOut();
  }

}
