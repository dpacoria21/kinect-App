import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Datas, Serie } from '../../interfaces/session.interface';
import { Sessions } from '../../../auth/interfaces/auth.interface';


@Component({
  selector: 'app-grafica',
  templateUrl: './grafica.component.html',
  styleUrls: ['./grafica.component.css']
})
export class GraficaComponent {

  series: Serie[] = [];
  multiRes: Datas[] = [];

  constructor( private authService:AuthService, private cookieService: CookieService ) { 

    this.authService.obtenerDatosDeSesiones()
    .subscribe( (resp:Sessions) =>{
      for(let i = 0; i<resp.sessions.length; i++){
        let aux: Serie = {
          name: ''+resp.sessions[i].id,
          value: resp.sessions[i].gameScore
        }
        this.series[i] = aux;
        let datos: Datas = {
          name: 'Score',
          series: this.series
        }
        this.multiRes = [datos];
      }
    });

  }

  resizeChart(width: any): void {
    this.view = [width, 320]
  }

  view: [number, number] = [800, 400];

  // options
  legend: boolean = false;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Sesiones';
  yAxisLabel: string = 'Puntos Obtenidos';
  timeline: boolean = true;


  


  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }


}
