import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree, Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad, CanActivate {

  constructor( private authService: AuthService,
               private router: Router ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean > | Promise<boolean > | boolean {

      /* if( this.authService.auth.success ){
        return true;
      }

      console.log("Bloqueado por el AuthGuard - CanActivate");
    return false; */
      return this.authService.verificaAutentificacion()
        .pipe(
          tap( estaAutenticado => {
            if (!estaAutenticado){
              this.router.navigate(['./'])
            }
          })
        );
  }


  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {

      return this.authService.verificaAutentificacion()
      .pipe(
        tap( estaAutenticado => {
          if (!estaAutenticado){
            this.router.navigate(['./'])
          }
        })
      );
      /* if( this.authService.auth.success ){
        return true;
      }

      console.log("Bloqueado por el AuthGuard - CanLoad");
    return false; */
  }

}
