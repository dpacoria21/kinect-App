import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  constructor( private authService:AuthService, private cookieService: CookieService ) { }

  ngOnInit(): void {
    this.authService.getDatos()
      .subscribe();
  }

}
