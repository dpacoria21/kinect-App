import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './services/auth.service';
import { RouterModule } from '@angular/router';
import { AuthRoutingModule } from './auth-routing.module';



@NgModule({
  declarations: [
    
  ],
  imports: [
    AuthRoutingModule,
    CommonModule,
    RouterModule,
  ],
  exports: [
    
  ]
})
export class AuthModule { }
