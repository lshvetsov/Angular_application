import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Server} from "../types/server.model";
import {Observable} from "rxjs";
import {ServersService} from "../servers/servers.service";
import {Injectable} from "@angular/core";

@Injectable()
export class ServerResolver implements Resolve<Server> {

  constructor(private serverService: ServersService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Server> | Promise<Server> | Server {
    // @ts-ignore
    return this.serverService.getServer(+route.params['id']);
  }

}
