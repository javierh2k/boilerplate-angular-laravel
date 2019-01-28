import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

import { Injectable } from '@angular/core';
// import { CanActivate, Router } from '@angular/router';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

import { AuthenticationService } from '../_services/authentication.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthenticationService, private router: Router) { }

  // canActivate() {
  //   if (localStorage.getItem('user')) {
  //     return true;
  //   }
  //   this.router.navigate(['/login']);
  //   return false;
  // }


  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.authService.isLoggedIn.pipe(
      take(1),
      map((isLoggedIn: boolean) => {
        if (!isLoggedIn) {
          this.router.navigate(['/login']);
          return false;
        }
        return true;
      })
    );
  }




  // canActivate(
  //   next: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot
  // ): Observable<boolean> {
  //   return this.authService.isLoggedIn         // {1}
  //     .pipe(
  //       take(1),                              // {2}
  //       map((isLoggedIn: boolean) => {         // {3}
  //         if (!isLoggedIn) {
  //           this.router.navigate(['/login']);  // {4}
  //           return false;
  //         }
  //         if (localStorage.getItem('user')) {
  //           return true;
  //         }
  //         // return true;
  //       })
  //     );
  // }

}
