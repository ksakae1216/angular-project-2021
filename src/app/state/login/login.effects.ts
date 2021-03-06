import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';

import { doLogin, setLoginStateSuccess, setErrorMessage } from './login.action';
import { LoginService } from '../../services/login/login.service';

@Injectable()
export class LoginEffects {
  setLoginStateSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(doLogin),
      switchMap(({loginId, password}) =>
        this.loginService.doLogin(loginId, password).pipe(
          map(result => {
            if (result) {
              return setLoginStateSuccess({ isLogin: result });
            }

            return setErrorMessage({ errorMessage: 'ログインに失敗しました' });
          }),
          // catchError(err => of(doLoginFailure({error: err})))
        )),
    )
  );

  constructor(private actions$: Actions, private loginService: LoginService) {}
}
