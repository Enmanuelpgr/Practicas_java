import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router'; // Lo necesitamos para el botón de volver
import { CarritoService } from '../../services/carrito';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './carrito.html',
  styleUrl: './carrito.css'
})
export class CarritoComponent {
  // Inyectamos el servicio para que el HTML pueda leerlo directamente
  carritoService = inject(CarritoService);
}