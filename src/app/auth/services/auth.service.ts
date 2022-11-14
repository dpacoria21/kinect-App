import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Auth, User } from '../interfaces/auth.interface';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = 'http://localhost:4000/api/auth/login';

  private isValidate: boolean = false;
  private _autor: Auth | undefined;

  constructor( private http: HttpClient, private router: Router ) { }

  login(user: User){
    return this.http.post<Auth>(this.baseUrl,user).subscribe(resp => {
      this._autor = resp;
      this.isValidate = this._autor.success;
      console.log(this._autor.user.fullname);
      this.router.navigate(['./']);
    }, error => {
      console.log(error.error.message[0]);
    });
  }

  showResults():boolean{
    return this.isValidate;
  }

  get auth():Auth {
    return {...this._autor!};
  }



}
