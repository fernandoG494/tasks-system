import { Injectable } from '@angular/core';
import { Observable, catchError, delay, map, of, throwError } from 'rxjs';
import { environment } from '../environments/environment';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = `${environment.apiUrl}`;

  constructor(private http: HttpClient) {}

  register(name: string, password: string, email: string): Observable<any> {
    return this.http
      .post<any>(`${this.apiUrl}/user`, { name, password, email })
      .pipe(
        map((response) => {
          return response;
        }),
        catchError(this.handleError)
      );
  }

  login(email: string, password: string): Observable<any> {
    return this.http
      .post<{ user: any }>(`${this.apiUrl}/user/login`, { email, password })
      .pipe(
        map((response) => {
          return response;
        }),
        catchError(this.handleError)
      );
  }

  verifyToken(token: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/user/check-token`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  private handleError({ error }: HttpErrorResponse) {
    let errorMessage = error.message;
    return of({ message: errorMessage, status: 'error' });
  }
}
