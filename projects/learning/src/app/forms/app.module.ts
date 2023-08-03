import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import {HomeworkComponent} from "./homework/homework.component";
import {RouterModule, Routes} from "@angular/router";
import {MainComponent} from "./main-form/main.component";
import {ReactiveFormComponent} from "./reactive/reactive-form.component";
import {ReactiveHomeworkComponent} from "./reactive-homework/reactive-homework.component";

const appRoutes: Routes = [
  {path: '', component: AppComponent},
  {path: 'main', component: MainComponent},
  {path: 'homework', component: HomeworkComponent},
  {path: 'reactive', component: ReactiveFormComponent},
  {path: 'reactive-homework', component: ReactiveHomeworkComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeworkComponent,
    MainComponent,
    ReactiveFormComponent,
    ReactiveHomeworkComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
