import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import {HomeworkComponent} from "./forms/homework/homework.component";
import {RouterModule, Routes} from "@angular/router";
import {MainComponent} from "./forms/main-form/main.component";

const appRoutes: Routes = [
  {path: '', component: AppComponent},
  {path: 'main', component: MainComponent},
  {path: 'homework', component: HomeworkComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeworkComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
