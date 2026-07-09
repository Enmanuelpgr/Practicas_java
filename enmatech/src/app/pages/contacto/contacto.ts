import { Component } from '@angular/core';

@Component({
  selector: 'app-contacto',
  standalone: true,
  templateUrl: './contacto.html',
  styleUrl: './contacto.css'
})
export class ContactoComponent {
  
  enviarMensaje(evento: Event) {
    evento.preventDefault(); // Evita que la página parpadee
    alert('¡Gracias por escribirnos! Un asesor de EnmaTech se comunicará contigo pronto. 🚀');
  }
}
