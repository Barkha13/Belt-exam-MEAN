import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Router, ActivatedRoute} from '@angular/router';

@Injectable()
export class ApiService {

  private name;
  constructor(private _http: Http, private router: Router, private route: ActivatedRoute) { }

  login(){
    return this._http.get('/login')
    .subscribe(
      (response) => {
        console.log('success');
        // this.router.navigate(['/recipe','all'])
      },
      (err) => {
        console.log('Error in loading login page...');
      }
    )
  }

  setName(name){
    this.name = name;
    return this.name;
  }

  getName(){
    return this.name;
  }

}
