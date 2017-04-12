import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { User } from "app/models/user";

@Injectable()
export class UserService  {

   constructor(private http: Http) {
   }

   getUsers(): Observable<User[]> {
      return this.http.get("https://jsonplaceholder.typicode.com/users")
         .map((res: Response) => res.json())
         .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
   }
}