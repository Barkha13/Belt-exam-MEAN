import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService} from './../api.service';


@Component({
  selector: 'app-add-que',
  templateUrl: './add-que.component.html',
  styleUrls: ['./add-que.component.css']
})
export class AddQueComponent implements OnInit {
  quest = '';
  desc = '';
  

  constructor(private _apiService : ApiService, private router: Router) { }

  ngOnInit() {
  }

  onClick(){
    console.log(this.quest,'---', this.desc);
    this._apiService.addQue(this.quest,this.desc);
  }

}
