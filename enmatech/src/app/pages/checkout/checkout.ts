import { Component, inject } from '@angular/core';
import { Router } from '@angular/router'; // Herramienta para redireccionar páginas
import { CarritoService } from '../../services/carrito';

@Component({
  selector: 'app-checkout',
  standalone: true,
  templateUrl: './checkout.html',
  styleUrl: './checkout.css'
})
export class CheckoutComponent {
  carritoService = inject(CarritoService);
  router = inject(Router);

  procesarPago(evento: Event) {
    evento.preventDefault(); // Evita que el navegador intente recargar la página al enviar el formulario
    
    // Mostramos mensaje de éxito
    alert('¡Pago procesado con éxito! Gracias por tu compra en EnmaTech. 🚀');
    
    // Vaciamos el carrito (seteando el array a vacío)
    this.carritoService.items.set([]);
    
    // Redirigimos al usuario a la página de inicio
    this.router.navigate(['/']);
  }
}