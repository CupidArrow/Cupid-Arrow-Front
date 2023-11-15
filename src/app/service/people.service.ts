import { Injectable } from '@angular/core';
import { People } from '../shared/people';
import { environment } from '../../environments/environment.development';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  people !: People

  private baseUrl = environment.baseUrl + '/users';

  constructor(private http: HttpClient) { }

  handlerError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.log(
        `An error occurred ${error.status}, body was: ${error.error}`
      );
    } else {
      console.log(
        `Backend returned code ${error.status}, body was: ${error.error}`
      );
    }
    return throwError(() => new Error('Something bad happened; please try again later.'));

  }

  getAllPeople() : Observable<People[]> {
    return this.http.get<People[]>(this.baseUrl)
  }

  postPeople(people: People) {
    return this.http.post<People>(this.baseUrl, people)
  }

}
