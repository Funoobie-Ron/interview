import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
    return throwError(error);
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
    console.log('current');

    // Retrieve the token from wherever it's stored (e.g., localStorage)
    const token = localStorage.getItem('token');

    // Ensure token exists
    if (!token) {
      // Handle case where token is missing (e.g., redirect to login)
      return throwError('Token is missing');
    }

    // Construct request headers with the token
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<any>(`${this.baseUrl}api/users`)
      .pipe(
        catchError(this.handleError)
      );
  }

  currentuser(): Observable<any> {
    console.log('current');

    // Retrieve the token from wherever it's stored (e.g., localStorage)
    const token = localStorage.getItem('token');

    // Ensure token exists
    if (!token) {
      // Handle case where token is missing (e.g., redirect to login)
      return throwError('Token is missing');
    }

    // Construct request headers with the token
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    // Make the HTTP request with the token included in the headers
    return this.http.get<any>(`${this.baseUrl}/api/users/currentuser`, { headers })
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

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  remove(): void {
    localStorage.removeItem('token');
  }

  isLoggedIn(): boolean {
    // Check if user is logged in by verifying if a token is present
    const token = localStorage.getItem('token'); // Assuming you store the token in localStorage
    return !!token;
  }
}
