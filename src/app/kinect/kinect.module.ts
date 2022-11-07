import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { LoginComponent } from './pages/login/login.component';





@NgModule({
  declarations: [
    MainPageComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
  ], exports: [

  ]
})
export class KinectModule { }
