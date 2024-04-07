import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  private loginUrl = "http://localhost:3000/users/login";
  private questionUrl = "http://localhost:3000/users"; // Assuming you have an endpoint to fetch the unique question

  loginUser(phone_number: string, unique_answer: string): Observable<boolean> {
    return this.http.post<any>(this.loginUrl, { phone_number, unique_answer }).pipe(
      catchError(this.handleError), // Add error handling here
      map(response => {
        if (response) {
          console.log(response);
          sessionStorage.setItem("currentUser", JSON.stringify(response));
          return true;
        }
        return false;
      })
    );
  }

  getUniqueQuestion(): Observable<string> {
    return this.http.get<any>(this.questionUrl).pipe(
      map((response: { unique_question: any; }) => response.unique_question),
      catchError(this.handleError) // Add error handling here
    );
  }

  private handleError(error: HttpErrorResponse) {
    console.error('An error occurred:', error.error.message || error.statusText);
    return throwError('Something bad happened; please try again later.');
  }

  logout(){
    sessionStorage.removeItem("user");
  }
}
