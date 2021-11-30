import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { LoginService } from '@services';
import { Observable, of } from 'rxjs';
import { catchError, switchMap, tap } from 'rxjs/operators';

import { LoginInfoDef } from '../../services/login/login-info-def';

export interface LoginState {
  loginable: boolean;
}

@Injectable()
export class LoginStore extends ComponentStore<LoginState> {

  constructor(private loginService: LoginService) {
    super();
  }

  readonly loginable$: Observable<boolean> = this.select(state => state.loginable);

  readonly checkLoginable = this.effect((loginInfo$: Observable<LoginInfoDef>) => {
    return loginInfo$.pipe(
      switchMap(state => this.loginService.doLogin(state.loginId, state.password).pipe(
        tap({
          next: ret => this.setState({loginable: ret}),
        }),
        catchError(() => {
          alert('500 Error');
          return of(null);
        }),
      )),
    );
  });

}
