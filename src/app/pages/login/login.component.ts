import { Component, OnInit } from '@angular/core';
import { LoginInfoDef } from '../../services/login/login-info-def';
import { LoginService } from '@services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  logininfo: LoginInfoDef = { loginid: '', password: '' };

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  doLogin(loginId: string, password: string): void {
    this.loginService.doLogin(loginId, password);
  }

}
