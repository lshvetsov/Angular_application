import {Component} from "@angular/core";


@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`
    .online {
      color: white;
    }
  `]
})
export class ServerComponent {
    serverId = 10;
    serverStatus = 'OFFLINE';

    constructor() {
      this.serverStatus = Math.random() > 0.5 ? 'ONLINE' : 'OFFLINE';
    }

    getStatus():string {
      return this.serverStatus;
    }

    isServerUp(): boolean {
      return this.serverStatus === 'ONLINE';
    }

    getColor(): string {
      return this.serverStatus === 'ONLINE' ? 'green' : 'red';
    }

}
