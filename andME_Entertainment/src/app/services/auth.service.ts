import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private http: HttpClient) { }

  private loginUrl = "http://localhost:3000/users";

  loginUser(phone_number: string, unique_answer: string): Observable<boolean> {
    return this.http.post<any>(this.loginUrl, { phone_number, unique_answer }).pipe(
      tap(response => {
        if (response) {
          console.log(response)
          sessionStorage.setItem("currentUser", JSON.stringify(response));
        }
      })
    );
  }

  logout(){
    sessionStorage.removeItem("user")
  }
}