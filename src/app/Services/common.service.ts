import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private baseUrl = 'http://localhost:3000'; // Adjust this URL to match your Node.js API endpoint

  constructor(private http: HttpClient) { }

  // Function to handle errors
  private handleError(error: any) {
    console.error('API Error:', error);
    return throwError('An error occurred. Please try again later.');
  }

  // Function to perform HTTP POST request for login
  login(credentials: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/api/auth/login`, credentials)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Function to perform HTTP POST request for registration
  register(user: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/api/auth/register`, user)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Function to perform HTTP GET request to fetch all users
  getAllUsers(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}api/users`)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Function to perform HTTP PUT request to edit a user
  editUser(userId: string, userData: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}api/users/${userId}`, userData)
      .pipe(
        catchError(this.handleError)
      );
  }
}
