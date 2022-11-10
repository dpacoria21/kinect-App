import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './kinect/pages/main-page/main-page.component';
import { LoginComponent } from './kinect/pages/login/login.component';
import { ForNothingComponent } from './kinect/pages/for-nothing/for-nothing.component';
import { ResultsComponent } from './kinect/pages/results/results.component';

const routes: Routes = [
  {
    path: '', component: MainPageComponent, pathMatch: 'full'
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'results', component: ResultsComponent
  },
  {
    path: 'forNothing', component: ForNothingComponent
  },
  {
    path: '**', redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
