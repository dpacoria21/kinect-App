import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { SidebarComponent } from '../../../../gifsApp/src/app/shared/sidebar/sidebar.component';



@NgModule({
  declarations: [
    FooterComponent,
    MenuComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FooterComponent,
    MenuComponent,
    SidebarComponent
  ]
})
export class SharedModule { }
