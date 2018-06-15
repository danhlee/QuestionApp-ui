import { Component, OnInit } from '@angular/core';
import { QuestionAppService } from '../../services/question-app.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  userForm: FormGroup;
  loginForm: FormGroup;
  validMessage: String = '';

  constructor(private questionAppService: QuestionAppService) { }

  ngOnInit() {
    this.userForm = new FormGroup({
      // FormControl(defaultValue, typeOfValidator)
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email])
    });

    this.loginForm = new FormGroup({
      email: new FormControl('', Validators.email),
      password: new FormControl('', [Validators.required, Validators.email])
    });
  }

  submitNewUser() {
    if (this.userForm.valid) {
      this.validMessage = 'You have successfully created a new user account!';
      // pass in value of form (JSON user object) to the createUser(user: User) method in questionAppService.service
      // angular will return an Observable that we can subscribe to even if Controller method returns void
      this.questionAppService.createUser(this.userForm.value).subscribe(
        data => {
          this.userForm.reset();
          return true;
        },
        error => {
          return Observable.throw(error);
        }
      );
    } else {
      this.validMessage = 'Please complete the form before submitting!';
    }
  }

  loginUser() {
    if (this.userForm.valid) {
      this.validMessage = 'You have successfully logged in!';
      // pass in value of form (JSON user object) to the createUser(user: User) method in questionAppService.service
      // angular will return an Observable that we can subscribe to even if Controller method returns void
      this.questionAppService.createUser(this.userForm.value).subscribe(
        data => {
          this.userForm.reset();
          return true;
        },
        error => {
          return Observable.throw(error);
        }
      );
    } else {
      this.validMessage = 'Please complete the form before submitting!';
    }
  }
}
