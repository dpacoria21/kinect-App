import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate, CanLoad {

  constructor( private authService: AuthService,
    private router: Router ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean > | Promise<boolean > | boolean {
      let aux = localStorage.getItem('user');
      if(aux === null){
        console.log('permitido');
        return true;
      }else{
        this.router.navigate(['http://localhost:4200/']);
        return false;
      }
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean > | Promise<boolean> | boolean  {
      let aux = localStorage.getItem('user');
      if(aux === null){
        console.log('permitido');
        return true;
      }else{
        this.router.navigate(['http://localhost:4200/']);
        return false;
      }
  }
}
