import {Component} from "@angular/core";

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html'
})
export class ServersComponent {
  doesUserAllowAddServer = false;
  serverCreationStatus = "Server hasn't been created";
  serverName = 'Basic';
  serverAdded = false;
  servers = ['TestServer1', 'TestServer2']

  constructor() {
    setTimeout(() => {this.doesUserAllowAddServer = true}, 2000)
  }

  onServerButtonClick() {
    this.serverAdded = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = `Server ${(this.serverName)} has been created`;
  }

  onServerNameInput(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value
  }

}
