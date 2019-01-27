import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }
  userName: string;
  password: string;
  login(): any {
    throw new Error('Method not implemented.');
  }

  ngOnInit() {
  }

}
