import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import { LoginInfoDef } from './login-info-def';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  constructor( private http: HttpClient ) { }

  public doLogin(loginId: string, password: string): Observable<boolean> {
    return this.http.get<LoginInfoDef[]>(`/api/login-user?loginId=${loginId}&password=${password}`).pipe(
      map(ret => ret.length !== 0),
    );
  }

}
