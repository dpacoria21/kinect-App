import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';
import { CookieService } from 'ngx-cookie-service';
import { Color } from '@swimlane/ngx-charts/public-api';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent {
  showBoolean: boolean = false;

  showTable():void {
    this.showBoolean = !this.showBoolean;
  }
}
