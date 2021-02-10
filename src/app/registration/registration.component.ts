import { Component, OnInit } from '@angular/core';
import {User} from '../model/User';
import {ApiService} from '../shared/api.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  user: User = {
    id: null,
    login: 'SAS',
    password: 'pwd'
  };

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.user.login = 'SAS';
    this.user.password = 'pwd';
  }

  save(): void {
    console.log('send!');
    this.apiService.postUser(this.user).subscribe(
      res => {
        console.log(res);
      },
      error => {
        console.log(error);
      }
    );
  }

}
