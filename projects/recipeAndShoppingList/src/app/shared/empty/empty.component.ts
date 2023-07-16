import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Data} from "@angular/router";

@Component({
  selector: 'app-empty',
  templateUrl: './empty.component.html',
  styleUrls: ['./empty.component.css']
})
export class EmptyComponent implements OnInit{
  // @ts-ignore
  message: string;

  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.route.data.subscribe(
      (data: Data) => {
        this.message = data['message'];
      }
    )
  }
}
