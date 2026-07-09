import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive], // Esto arregla el error NG8002
  templateUrl: './navbar.html', // <-- Apunta directo a tu navbar.html
  styleUrl: './navbar.css'      // <-- Apunta directo a tu navbar.css
})
export class NavbarComponent { }