import { Component, OnInit } from '@angular/core';
import {PostService} from "./post.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts = [];
  isFetching = false;
  error = null;

  constructor(private service: PostService) {}

  ngOnInit() {
    this.fetchPosts()
  }

  onCreatePost(form: NgForm) {
    this.service.createPost(form.value);
    form.reset();
  }

  onFetchPosts() {
    this.fetchPosts()
  }

  onClearPosts() {
    this.service.deletePosts().subscribe(response => this.loadedPosts = [])
  }

  onHandleErrors() {
    this.error = null;
  }

  private fetchPosts() {
    this.service.errorSubject.subscribe(error => this.error = error)
    this.isFetching = true;
    this.service.fetchPosts().subscribe(
      posts => {
        this.loadedPosts = posts;
        this.isFetching = false;},
      error => {
        this.isFetching = false;
        this.error = error.message;
      })
  }
}
