import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { LoginComponent } from './pages/login/login.component';
import { VerificatedComponent } from './components/verificated/verificated.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { ResultsComponent } from './pages/results/results.component';
import { ForNothingComponent } from './pages/for-nothing/for-nothing.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GraficaComponent } from './components/grafica/grafica.component';
import { RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    MainPageComponent,
    LoginComponent,
    VerificatedComponent,
    ResultsComponent,
    ForNothingComponent,
    GraficaComponent,
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    RouterModule,
    
    
  ], exports: [
    
  ]
})
export class KinectModule { }
