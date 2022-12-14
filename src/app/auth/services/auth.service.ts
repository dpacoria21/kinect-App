import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Auth, User, Sessions } from '../interfaces/auth.interface';
import { Router } from '@angular/router';
import { map, Observable, of, tap } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = 'https://kinect-api-production.up.railway.app/api';

  private isValidate: boolean = false;
  private _autor: Auth | undefined;

  private _user: User | undefined;

  constructor( private http: HttpClient, private router: Router, private cookieService:CookieService ) { }

  getDatos(){
    return this.http.get(`${this.baseUrl}/users`,{withCredentials:true});
  }


  login(user: User){
    this._user = user;
    return this.http.post<Auth>(`${this.baseUrl}/auth/login`,user,{ withCredentials:true })

      .pipe(
        tap( auth => localStorage.setItem( 'auth', JSON.stringify(auth) ) )
      )
      .subscribe(resp => {
        this._autor = resp;
        localStorage.setItem('user', JSON.stringify(this._user));
        this.isValidate = this._autor.success;
        this.router.navigate(['./']);
      }, error => {
        Swal.fire({
          icon: "error",
          title: error.error.message[0],
          text: '',
          footer: '¡Enviado desde nuestro servidor!'
        })
    });
  }

  showResults():boolean{

    if( localStorage.getItem('user') !== null || localStorage.getItem('auth') ){
      this._user = JSON.parse( localStorage.getItem('user')! );
      this._autor = JSON.parse( localStorage.getItem('auth')! );
      return true;
    }
    return false;
  }

  get auth():Auth {
    return {...this._autor!};
  }

  logout():void{
    this.http.post(`${this.baseUrl}/auth/logout`,this._autor,{withCredentials:true})
      .subscribe( (resp:any) => {
        if(resp.success){
          localStorage.removeItem('user');
          localStorage.removeItem('auth');
          this.isValidate = false;
          this._autor = undefined;
          this._user = undefined;
        }
      });

  }

  verificaAutentificacion(): Observable<boolean>{
    let valor:Auth = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')!) : localStorage.getItem('user');
    if(valor === null){
      return of(false);
    }

    return this.http.get<Auth>(`${this.baseUrl}/auth/validate`, {withCredentials:true})
      .pipe(
        map( auth => {
          this._autor = auth;
          this.isValidate = auth.success;
          console.log('map', auth);
          return true;
        })
      );
  }

  obtenerDatosDeSesiones(): any {
    return this.http.get<Sessions>(`${this.baseUrl}/sessions`, {withCredentials: true});
  }

  get estaValidado():boolean{
    return this.isValidate;
  }

}
