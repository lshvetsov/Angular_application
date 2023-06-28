import {Component, EventEmitter, Output} from "@angular/core";


@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent {

  @Output() serverCreated = new EventEmitter<{type: string, name: string, content: string}>();
  @Output() blueprintCreated = new EventEmitter<{type: string, name: string, content: string}>();
  newServerContent = '';

  onAddServer(serverName: HTMLInputElement) {
    this.serverCreated.emit({
      type: 'server',
      name: serverName.value,
      content: this.newServerContent
    });
  }

  onAddBlueprint(serverName: HTMLInputElement) {
    this.blueprintCreated.emit({
      type: 'server',
      name: serverName.value,
      content: this.newServerContent
    });
  }

}
