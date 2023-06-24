import {Component} from "@angular/core";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styles: [`
    .fifth {
      color: white;
    }
  `]
})
export class UsersComponent {

  userName = '';
  password = 'tuna';
  passwordEnabled = false;
  clicks: Date[] = [];
  allowCleanUserNameButton():boolean {
    return !!this.userName;
  }

  onUserButtonClick():void {
    this.userName = '';
  }

  togglePassword(): void {
    this.passwordEnabled = !this.passwordEnabled;
    this.clicks.push(new Date());
  }

}
