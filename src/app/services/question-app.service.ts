import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Observable } from 'rxjs';

// specify the type/form data should take when it's passed around (request or response)
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class QuestionAppService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get('/server/QuestionApp/user');
  }

  getUser(id: Number) {
    return this.http.get('/server/QuestionApp/user/' + id);
  }

  // changed let to const
  createUser(user) {
    const body = JSON.stringify(user);
    return this.http.post('/server/QuestionApp/user', body, httpOptions);
  }
  authenticateUser(user) {
    const body = JSON.stringify(user);
    return this.http.post('/server/QuestionApp/authenticateUser', body, httpOptions);
  }
}
