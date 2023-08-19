import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import {FormGroup} from "@angular/forms";
import {Parent} from "../../models/parent";


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = '';

@Injectable({
  providedIn: 'root'
})
export class ParentService {
  constructor(private http: HttpClient) {
  };

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      return of(result as T);
    };
  };
  getParent(): Observable<Response[]> {
    let url = apiUrl + '/Parent';
    return this.http.get<Response[]>(url)
      .pipe(
        tap(heroes => console.log('fetched parent')),
        catchError(this.handleError('get parent', []))
      );
  };

  getParentById(id: any): Observable<Response[]> {
    let url = ''  + id;
    return this.http.get<Response[]>(url)
      .pipe(
        tap(heroes => console.log('fetched parent')),
        catchError(this.handleError('get parent', []))
      );
  };

  addParent(parent: FormGroup): Observable<Response[]> {
    let url = apiUrl + '/parent';
    return this.http.post<Response[]>(url, parent, httpOptions).pipe(
      tap(heroes => console.log('added comapny')),
      catchError(this.handleError('addCompany', []))
    );
  };

  updateParent(id: number, parent: Parent): Observable<Response[]> {
    let url = apiUrl + '/parents' + id;
    return this.http.post<Response[]>(url, parent, httpOptions).pipe(
      tap(heroes => console.log('updated parent')),
      catchError(this.handleError('updateparent', []))
    );
  };

  deleteParent(id: number): Observable<Response[]> {
    let url = apiUrl + '/parent/' + id;
    return this.http.delete<Response[]>(url, httpOptions).pipe(
      tap(heroes => console.log('deleted parent')),
      catchError(this.handleError('deleteparent', []))
    );
  };

}
