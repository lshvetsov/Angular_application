import { Component, Input } from '@angular/core';
import {AccountsService} from "../services/accounts.service";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: []
})
export class AccountComponent {
  // @ts-ignore
  @Input() account: {name: string, status: string};
  // @ts-ignore
  @Input() id: number;

  constructor(private accountsService: AccountsService) {}

  onSetTo(status: string) {
    this.accountsService.updateStatus({id: this.id, newStatus: status});
    // this.loggingService.logAccountStatus(status);  --> moved to accountsService
  }
}
