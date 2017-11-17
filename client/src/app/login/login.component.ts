import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService} from './../api.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login_name;

  constructor(private _apiService : ApiService, private router: Router) { }

  ngOnInit() {
  }

  onClick(){
    console.log('inside onclick');
    this._apiService.setName(this.login_name);
    this.router.navigate(['dashboard']);
  }

}
