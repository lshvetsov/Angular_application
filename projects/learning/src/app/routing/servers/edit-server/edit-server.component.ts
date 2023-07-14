import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import {ActivatedRoute, Params, Router, UrlTree} from "@angular/router";
import {CanComponentDeactivate} from "../../guards/can-deactivate-guard.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, CanComponentDeactivate {
  // @ts-ignore
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  allowEditing = false;
  changesSaved = false;

  constructor(private serversService: ServersService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    const id = +this.route.snapshot.params['id'];
    // @ts-ignore
    this.server = this.serversService.getServer(id);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
    this.route.queryParams.subscribe(
      (params: Params) => {
        this.allowEditing = params['allowEdit'] === 'true';
      }
    )
    this.route.params.subscribe(
      (params: Params) => {
        // @ts-ignore
        this.server = this.serversService.getServer(+params['id']);
      }
    )
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
    this.changesSaved = true;
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  canDeactivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!this.allowEditing) {
      return true;
    }
    if (this.serverName !== this.server.name || this.serverStatus !== this.server.status) {
      return confirm("Do you wanna discard the changes?");
    } else {
      return true;
    }
  }

}
