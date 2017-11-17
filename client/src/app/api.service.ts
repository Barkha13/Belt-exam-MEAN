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

  addQue(que,desc){
    this.name = this.getName();
    
    this._http.post(`/new_que/${que}/${desc}/${this.name}`, que, desc)
    .subscribe(
      (response) => {
        console.log('added que...');
        // this.router.navigate(['/recipe','all'])
      },
      (err) => {
        console.log('Error in adding...');
      }
    )
  }

  showQuestions(callback){
    this._http.get('/all')
    .subscribe(
      (response) => {
        callback(response.json());
      },
      (err) => {
        console.log(err);
      }
    )
  }

  showAns(id){
    return this._http.get(`/show/${id}`,id)
    .subscribe(
      // (response) => {
      //   callback(response.json());
      // },
      // (err) => {
      //   console.log(err);
      // }
    )
  }
}
