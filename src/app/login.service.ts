import { Injectable } from '@angular/core';
import { LOGININFOLIST } from './mock';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  isLoginOk: boolean;

  constructor(private router: Router) { }

  /**
   * doLogin
   */
  public doLogin(loginId: string, password: string) {
    this.isLoginOk = this.isLogin(loginId, password);
    if (this.isLoginOk) {
      this.router.navigateByUrl('/list');
    }
  }

  /**
   * isLogin
   */
  private isLogin(loginId: string, password: string): boolean {
    // Login Check
    const isLoginObj = LOGININFOLIST.find(
      // (logininfo) => { return (logininfo.loginid === loginId && logininfo.password === password); }
      (logininfo) => (logininfo.loginid === loginId && logininfo.password === password)
    );

    if (isLoginObj !== undefined) {
      return true;
    } else {
      return false;
    }

  }
}
