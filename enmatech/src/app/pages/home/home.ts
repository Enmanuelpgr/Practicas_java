import { Component } from '@angular/core';
import { RouterLink } from '@angular/router'; // <-- 1. Importamos la herramienta

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink], // <-- 2. Activamos la navegación
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent {

}