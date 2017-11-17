import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService} from './../api.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  login_name;
  questions;

  constructor(private _apiService : ApiService, private router: Router) { 
    this.login_name = _apiService.getName();
    this._apiService.showQuestions((data)=> {
      console.log('data is.....',data);
      this.questions = data;
    });
    console.log('login name...', this.login_name);
    console.log('questions are..',this.questions);
  }


  ngOnInit() {
    this._apiService.showQuestions((data)=>{
      console.log(data);
      this.questions = data;
    })
  }

  onShow(id){
    console.log('id in is..', id);
    this.router.navigate(['/show', id]);
  }
}
