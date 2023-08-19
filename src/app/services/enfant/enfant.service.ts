import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import {FormGroup} from "@angular/forms";
import {Enfant} from "../../models/enfant";


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = '';

@Injectable({
  providedIn: 'root'
})
export class EnfantService {
  constructor(private http: HttpClient) {
  };

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      return of(result as T);
    };
  };
  getEnfant(): Observable<Response[]> {
    let url = apiUrl + '/Child';
    return this.http.get<Response[]>(url)
      .pipe(
        tap(heroes => console.log('fetched Child')),
        catchError(this.handleError('get Child', []))
      );
  };

  getEnfantById(id: any): Observable<Response[]> {
    let url = ''  + id;
    return this.http.get<Response[]>(url)
      .pipe(
        tap(heroes => console.log('fetched parent')),
        catchError(this.handleError('get parent', []))
      );
  };

  addEnfant(child: FormGroup): Observable<Response[]> {
    let url = apiUrl + '/parent';
    return this.http.post<Response[]>(url, child, httpOptions).pipe(
      tap(heroes => console.log('added Child')),
      catchError(this.handleError('addChild', []))
    );
  };

  updateEnfant(id: number, child: Enfant): Observable<Response[]> {
    let url = apiUrl + '/Childs' + id;
    return this.http.post<Response[]>(url, child, httpOptions).pipe(
      tap(heroes => console.log('updated child')),
      catchError(this.handleError('updatechild', []))
    );
  };

  deleteEnfant(id: number): Observable<Response[]> {
    let url = apiUrl + '/child/' + id;
    return this.http.delete<Response[]>(url, httpOptions).pipe(
      tap(heroes => console.log('deleted child')),
      catchError(this.handleError('deletechild', []))
    );
  };

}
