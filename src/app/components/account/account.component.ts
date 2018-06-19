import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  public user;

  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.user = this.loginService.loggedInUser;
  }

}
