import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import { LoginInfoDef } from './login-info-def';
import { LOGININFOLIST } from '../../mock';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  constructor(private router: Router, private http: HttpClient) { }

  public doLogin(loginId: string, password: string) {
    this.loginAble(loginId, password).subscribe(isLoginOk => {
      if (isLoginOk) {
        this.router.navigateByUrl('/list');
      } else {
        alert('ログインに失敗しました。ログインID、パスワードを確認して下さい。');
      }
    });
  }

  private loginAble(loginId: string, password: string): Observable<boolean> {
    return this.http.get<LoginInfoDef>(`/api/login-user?loginId=${loginId}&password=${password}`).pipe(
      map(ret => !!ret.loginid),
      catchError(_ => {
        alert('500 Error');
        return of(false);
      }),
    );

  }
}
