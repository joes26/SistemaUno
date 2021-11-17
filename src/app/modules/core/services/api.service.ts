import { Injectable } from '@angular/core';

import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';


@Injectable()
export class ApiService {

  constructor(private http: HttpClient) {
  }

  private formatErrors(error: any) {
    return throwError(error.error);
  }

  get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    return this.http.get(`${environment.apiUrl}${path}`, { headers: this.getHeaders() })
      .pipe(catchError(this.formatErrors));
  }

  put(path: string, body: Object = {}): Observable<any> {
    return this.http.put(
      `${environment.apiUrl}${path}`,
      JSON.stringify(body)
      , { headers: this.getHeaders() }
    ).pipe(catchError(this.formatErrors));
  }

  post(path: string, body: Object = {}): Observable<any> {
    return this.http.post(
      `${environment.apiUrl}${path}`,
      JSON.stringify(body), { headers: this.getHeaders() }).pipe(catchError(this.formatErrors));
  }

  delete(path:string): Observable<any> {
    return this.http.delete(
      `${environment.apiUrl}${path}`
      , { headers: this.getHeaders() }
    ).pipe(catchError(this.formatErrors));
  }

  private getHeaders() {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'my-auth-token'
    })
  }

  postMultiPart(path: string, body: Object = {}): Observable<any> {
    return this.http.post(
      `${environment.apiUrl}${path}`,
      body).pipe(catchError(this.formatErrors));
    // catchError(this.formatErrors),
  }
}


