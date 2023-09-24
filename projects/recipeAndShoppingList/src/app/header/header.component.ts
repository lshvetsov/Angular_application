import {Component, OnDestroy, OnInit} from '@angular/core';
import {RecipeService} from "../services/recipe.service";
import {Subscription} from "rxjs";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  isAuthenticated = false;
  userSubscription: Subscription;
  constructor(private recipeService: RecipeService, private authService: AuthService) {
  }
  onSave(){
    this.recipeService.saveRecipes();
  }
  onFetch(){
    this.recipeService.fetchRecipes().subscribe();
  }
  onLogout() {
    this.authService.logout();
  }
  ngOnInit(): void {
    this.userSubscription = this.authService.userSubject.subscribe(
      user => this.isAuthenticated = !!user
    )
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }

}
