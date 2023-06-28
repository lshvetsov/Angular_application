import {Component, Input} from "@angular/core";


@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent {

  // @ts-ignore
  @Input('server') element: {type: string, name: string, content: string};

}
