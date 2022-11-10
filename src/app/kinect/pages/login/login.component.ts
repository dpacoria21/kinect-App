import { Component } from '@angular/core';
import { Auth, User } from '../../../auth/interfaces/auth.interface';
import { AuthService } from '../../../auth/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  hide:boolean = true;
  constructor( private authService: AuthService){}

  username:string = "";
  password:string = "";

  userVerificated () : void {
    const aux : User = {dni: this.username, password: this.password}
    this.authService.login(aux);
  }

}
