import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() componentSwitch = new EventEmitter<string>();
  dropdownOpen: boolean = false;

  onComponentSwitch(recipeShown: string) {
    this.componentSwitch.emit(recipeShown);
  }

}
