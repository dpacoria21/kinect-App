import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { LoginComponent } from './pages/login/login.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LoginComponent,
    MainPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ], exports: [
    LoginComponent,
    MainPageComponent
  ]
})
export class KinectModule { }
