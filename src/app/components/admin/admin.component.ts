import { Component, OnInit } from '@angular/core';
import { QuestionAppService } from '../../services/question-app.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public users;

  constructor(private questionAppService: QuestionAppService) { }

  ngOnInit() {
    this.getUsers();
  }

  // this method calls getUsers() method from service that  returns an Observable that we can subscribe to
  // resulting data is set to this.users variable
  // error messages are printed to console
  // () sends message to console that users were loaded successfully
  getUsers() {
    this.questionAppService.getUsers().subscribe(
      data => { this.users = data; },
      error => console.error(error),
      () => console.log('users loaded!')
    );
  }
}
