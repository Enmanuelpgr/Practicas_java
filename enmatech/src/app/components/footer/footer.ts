import { Component } from '@angular/core';
import { RouterLink } from '@angular/router'; // <-- Importamos la herramienta de rutas

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink], // <-- Le decimos al HTML que puede usarla
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class FooterComponent {
  anioActual = new Date().getFullYear();
}