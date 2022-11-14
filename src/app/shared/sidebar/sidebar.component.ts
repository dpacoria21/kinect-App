import { Component } from '@angular/core';
import { AuthService } from '../../auth/services/auth.service';
import { Auth } from '../../auth/interfaces/auth.interface';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor( private authService: AuthService ) { }
  
  get auth() {
    return this.authService.auth.user.fullname;
  }

  showBoolean():boolean{
    return this.authService.showResults();
  }
}
