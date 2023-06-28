import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularApp'
  serverElements = [{type: 'server', name: 'test server', content: 'test it!'}];

  onServerCreated(event: {name: string, content: string}) {
    this.serverElements.push({
        type: 'server',
        name: event.name,
        content: event.content
      }
    )
  }

  onBlueprintCreated(event: {type: string, name: string, content: string}) {
    this.serverElements.push({
        type: 'blueprint',
        name: event.name,
        content: event.content
      }
    )
  }


}
