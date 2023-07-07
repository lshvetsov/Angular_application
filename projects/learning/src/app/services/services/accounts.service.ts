import {Injectable} from "@angular/core";
import {LoggingService} from "./logging.service";

@Injectable()    // {providedIn: 'root'}
export class AccountsService {
  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    }
  ];

  constructor(private loggingService: LoggingService) {}

  addAccount(newAccount: {name: string, status: string}) {
    this.accounts.push(newAccount);
    this.loggingService.logAccountStatus(newAccount.status);
  }

  updateStatus(updateInfo: {id: number, newStatus: string}) {
    this.accounts[updateInfo.id].status = updateInfo.newStatus;
    this.loggingService.logAccountStatus(updateInfo.newStatus);
  }

}
