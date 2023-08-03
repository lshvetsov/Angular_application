import {Injectable} from "@angular/core";
import {Post} from "./post.model";
import {HttpClient, HttpEventType, HttpHeaders, HttpParams} from "@angular/common/http";
import {catchError, map, Observable, Subject, tap, throwError} from "rxjs";
import * as events from "events";

@Injectable({providedIn: 'root'})
export class PostService {

  postUrl: string = 'https://angularlearningcourse-d6e91-default-rtdb.europe-west1.firebasedatabase.app/posts.json';
  errorSubject = new Subject<string>();

  constructor(private http: HttpClient) {}

  createPost(post: Post):void {
    this.http.post<{name: string}>(this.postUrl, post, {
      observe: 'response'
    }).subscribe(
      responseData => console.log(responseData),
      error => {this.errorSubject.next(error.message)},
    )
  }

  deletePosts() {
    return this.http.delete<void>(this.postUrl, { observe: 'events'})
      .pipe(
        tap(event => {
          if (event.type === HttpEventType.Response) {
            console.log(event)
          }
        })
      );
  }

  fetchPosts():Observable<Post[]> {
    return this.http.get<{[key: string]: Post}>(this.postUrl,
      {
        headers: new HttpHeaders({'Custom-Header':'Value'}),
        params: new HttpParams().set('print', 'pretty')
      })
      .pipe(
        map(responseData => {
          const result: Post[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              result.push({...responseData[key], id: key});
            }
          }
          return result;
        }),
        catchError(error => throwError(() => error))
      );
  }
}
