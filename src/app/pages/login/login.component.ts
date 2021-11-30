import { Component, OnInit } from '@angular/core';
import { LoginInfoDef } from '../../services/login/login-info-def';
import { LoginStore } from 'app/store/login/login.store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [LoginStore]
})
export class LoginComponent implements OnInit {

  logininfo: LoginInfoDef = { loginId: '', password: '' };

  constructor(
    private router: Router,
    private loginStore: LoginStore
  ) { }

  ngOnInit() {
  }

  doLogin(loginId: string, password: string): void {
    const loginInfo: LoginInfoDef = {loginId, password};

    this.loginStore.checkLoginable(loginInfo);

    this.loginStore.loginable$.subscribe(loginable => {
      if (loginable) {
        this.router.navigateByUrl('/list');
      } else {
        alert('ログインに失敗しました。ログインID、パスワードを確認して下さい。');
      }
    });
  }

}
