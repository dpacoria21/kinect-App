import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanLoad, CanActivate } from '@angular/router';
import { MainPageComponent } from './kinect/pages/main-page/main-page.component';
import { LoginComponent } from './kinect/pages/login/login.component';
import { AuthGuard } from './auth/guards/auth.guard';
import { LoginGuard } from './auth/guards/login.guard';

const routes: Routes = [
  {
    path: '', component: MainPageComponent, pathMatch: 'full'
  },
  {
    path: 'login', component: LoginComponent,
    canLoad: [LoginGuard],
    canActivate: [LoginGuard]
  },
  {
    path: 'auth',
    loadChildren: () => import ('./auth/auth.module').then(m => m.AuthModule),
    canLoad: [AuthGuard],
    canActivate: [AuthGuard]
  },
  {
    path: '**', redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
