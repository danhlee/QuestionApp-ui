import { Component, OnInit } from '@angular/core';
import { QuestionAppService } from '../../services/question-app.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {
  public user;

  // need to import ActivatedRoute class to use this.route to inject into constructor
  constructor(private questionAppService: QuestionAppService, private route: ActivatedRoute) { }

  ngOnInit() {
    // get snapshot of route and among parameters in url find "id" (:id from url = *.params.id)
    this.getUser(this.route.snapshot.params.id);
  }

  // backend call using questionAppService
  getUser(id: Number) {
    this.questionAppService.getUser(id).subscribe(
      data => {
        this.user = data;
      },
      error => console.error(error),
      () => console.log('single user loaded!')
    );
  }
}
