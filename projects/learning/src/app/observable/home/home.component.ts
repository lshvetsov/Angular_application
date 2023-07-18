import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // @ts-ignore
  private subscription: Subscription;

  constructor() { }

  ngOnInit() {
    const customObservable = new Observable(observer => {
      let count = 0;
      setInterval(() => {
        observer.next(++count);
        if (count === 5) observer.complete();
        if (count === 3) observer.error(new Error("This is error!"))
      }, 1000)
    })
    this.subscription = customObservable.subscribe(data => {
      console.log(data);
    })
  }

}
