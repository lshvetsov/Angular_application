import {Component, OnInit} from '@angular/core';
import {AccountsService} from "./services/services/accounts.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent implements OnInit {

  accounts: {name: string, status: string}[] = [];

  constructor(private accountService: AccountsService) {}

  onAccountAdded(newAccount: {name: string, status: string}) {
    this.accountService.addAccount(newAccount);
  }

  onStatusChanged(updateInfo: {id: number, newStatus: string}) {
    this.accountService.updateStatus(updateInfo);
  }
  ngOnInit(): void {
    this.accounts = this.accountService.accounts;
  }

}
