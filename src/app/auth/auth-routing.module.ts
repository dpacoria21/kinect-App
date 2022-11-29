import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ResultsComponent } from '../kinect/pages/results/results.component';
import { GraficaComponent } from '../kinect/components/grafica/grafica.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'results', component: ResultsComponent
      },
      {
        path: 'results/sessions', component: GraficaComponent
      },
      {
        path: '**', redirectTo: './auth'
      }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild( routes ),
    CommonModule
  ],
  exports: [
    RouterModule
  ]
})
export class AuthRoutingModule { }
