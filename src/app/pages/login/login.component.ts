import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { LoginInfoDef } from '../../services/login/login-info-def';
import { LoginStore } from 'app/store/login/login.store';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as LoginAction from '../../state/login/login.action';
import { getIsLogin, getErrorMessage } from '../../state/login/login.selectors';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [LoginStore],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit {

  logininfo: LoginInfoDef = { loginId: '', password: '' };

  errorMessage$: Observable<string> = this.store.pipe(select(getErrorMessage));

  constructor(
    private router: Router,
    private store: Store<{isLogin: boolean, errorMessage: string}>
  ) { }

  ngOnInit() {
  }

  doLogin(loginId: string, password: string): void {

    this.store.dispatch(LoginAction.doLogin({loginId, password}));

    this.store.pipe(select(getIsLogin), filter(isLogin => !!isLogin)).subscribe(isLogin => {
      console.log('selector isLogin -> ', isLogin);
      if (isLogin) {
        this.router.navigateByUrl('/list');
      }
    });
  }

}
