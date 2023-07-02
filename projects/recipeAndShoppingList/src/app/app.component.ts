import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RecipeAndShoppingList';
  currentPanel: string = 'recipe';

  switchComponent(event: string) {
    this.currentPanel = event;
  }

}
