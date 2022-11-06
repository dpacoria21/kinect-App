import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor() { }


  username: string = '';
  password: string = '';

  goVerificated(): void{
    if(this.username === 'DiegoDios5432' && this.password === 'teAmo132'){
      console.log("Se ha iniciado correctamente");
      this.username = '';
      this.password = '';
    }else{
      console.log("Sesion Equivocada");
      this.username = '';
      this.password = '';
    }
  }
  

}
