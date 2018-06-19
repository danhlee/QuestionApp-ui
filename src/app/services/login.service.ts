import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


// specify the type/form data should take when it's passed around (request or response)
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public loggedInUser;
  public loggedIn = false;

  constructor(private http: HttpClient) { }

  authenticateUser(user) {
    const body = JSON.stringify(user);
    return this.http.post('/server/QuestionApp/authenticateUser', body, httpOptions);
  }
}
