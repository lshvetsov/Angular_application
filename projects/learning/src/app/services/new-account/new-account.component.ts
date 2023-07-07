import { Component } from '@angular/core';
import {AccountsService} from "../services/accounts.service";

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: []
})
export class NewAccountComponent {
  constructor(private accountsService: AccountsService) {}

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.addAccount({name: accountName, status: accountStatus});
    // this.loggingService.logAccountStatus(accountStatus);  --> moved to accountsService
  }
}
