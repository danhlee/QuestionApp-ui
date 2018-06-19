import { Component, OnInit } from '@angular/core';
import { QuestionAppService } from '../../services/question-app.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { LoginService } from '../../services/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  loginForm: FormGroup;
  userForm: FormGroup;
  validMessage: String = '';
  showingLogin = true;
  potentialUser;
  loggedIn = false;

  constructor(private questionAppService: QuestionAppService, private loginService: LoginService, private router: Router) {
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
    });

    this.userForm = new FormGroup({
      // FormControl(defaultValue, typeOfValidator)
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email])
    });
  }

  loginUser() {
    if (this.loginForm.valid) {
      // this.validMessage = 'Form fields are valid! Please wait for authentication...';
      // pass in value of form (JSON user object) to the createUser(user: User) method in questionAppService.service
      // angular will return an Observable that we can subscribe to even if Controller method returns void

      this.loginService.authenticateUser(this.loginForm.value).subscribe(
        data => {
          this.potentialUser = data;
          this.loginService.loggedInUser = data;
          this.loginForm.reset();
          this.goToAccount();
          // return true;
        },
        error => {
          return Observable.throw(error);
        }
      );
    } else {
      this.validMessage = 'Please complete the login fields before submitting!';
    }
  }

  registerNewUser() {
    if (this.userForm.valid) {
      this.validMessage = 'You have successfully created a new user account!';
      // pass in value of form (JSON user object) to the createUser(user: User) method in questionAppService.service
      // angular will return an Observable that we can subscribe to even if Controller method returns void
      this.questionAppService.createUser(this.userForm.value).subscribe(
        data => {
          this.potentialUser = data;
          this.loginService.loggedInUser = data;
          this.userForm.reset();
          this.goToAccount();
          // return true;
        },
        error => {
          return Observable.throw(error);
        }
      );
      this.goToAccount();

    } else {
      this.validMessage = 'Please complete the form before submitting!';
    }
  }

  loginSignupSwap() {
    this.showingLogin = !this.showingLogin;
  }

  goToAccount(): void {
    if (!this.potentialUser) {
      this.validMessage = 'This account does not exist!';
      this.loginForm.reset();
    } else {
      this.loginService.loggedIn = true;
      this.loggedIn = true;
      this.router.navigate(['/account']);
    }
  }

  logoutUser() {
    this.loginService.loggedIn = false;
    this.loggedIn = false;
    this.loginService.loggedInUser = null;
    this.potentialUser = null;
  }
}
