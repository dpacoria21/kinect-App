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

  message:string = "";

  constructor( private authService:AuthService, private cookieService: CookieService ) { 

    this.authService.obtenerDatosDeSesiones()
    .subscribe( (resp:Sessions) =>{
      for(let i = 0; i<resp.sessions.length; i++){
        let aux: Serie = {
          name: ''+(i+1),
          value: resp.sessions[i].gameScore
        }
        this.series[i] = aux;
        let datos: Datas = {
          name: 'Puntaje',
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
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Sesiones';
  yAxisLabel: string = 'Puntos Obtenidos';
  timeline: boolean = true;


  calculateMessage():void {
    let res = 0;
    for(let i=0; i<this.multiRes[0].series.length; i++) {
      res += this.multiRes[0].series[i].value;
    }
    res = res/this.multiRes[0].series.length;
    if(res<=100 && res>=90) {
      this.message = `🎉¡Vamos campeón lo estás haciendo genial, sigue adelante🎉!`
    }else if(res<90 && res>=70) {
      this.message = `¡👏Aún se puede seguir mejorando, lo estás haciendo bien👏!`;
    }else if(res<70 && res >=50) {
      this.message = `¡👍Vamos que esto recién está comenzando, tú puedes lograr más👍!`;
    }else {
      this.message = `¡✔Buen intento, recuerda que los mejores son los que saben levantarse de una caída, no te rindas✔!`;
    }
  }


  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
    this.calculateMessage();
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }


}
