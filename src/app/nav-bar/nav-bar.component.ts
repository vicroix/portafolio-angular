import { Component } from '@angular/core';
import { NavMenuComponent } from '../nav-menu/nav-menu.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [NavMenuComponent, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
