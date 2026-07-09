import { Component, inject, signal, computed } from '@angular/core';
import { RouterLink } from '@angular/router'; 
import { ProductoService, Producto } from '../../services/producto';
import { CarritoService } from '../../services/carrito';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [RouterLink], 
  templateUrl: './productos.html',
  styleUrl: './productos.css'
})
export class ProductosComponent {
  private productoService = inject(ProductoService);
  private carritoService = inject(CarritoService); 

  // 1. Obtenemos el catálogo completo
  catalogoBase = this.productoService.obtenerProductos();

  // 2. Creamos un "signal" para guardar el texto que el usuario escribe (inicia vacío)
  terminoBusqueda = signal('');

  // 3. Creamos una lista "computada" que se filtra automáticamente cuando el texto cambia
  catalogoFiltrado = computed(() => {
    const termino = this.terminoBusqueda().toLowerCase();
    
    return this.catalogoBase.filter(producto => 
      producto.nombre.toLowerCase().includes(termino) || 
      producto.categoria.toLowerCase().includes(termino)
    );
  });

  agregarAlCarrito(producto: Producto) {
    this.carritoService.agregar(producto);
    alert(`¡${producto.nombre} añadido a tu carrito! 🛒`);
  }
  
  // Función para capturar lo que el usuario escribe en el input
  actualizarBusqueda(evento: Event) {
    const input = evento.target as HTMLInputElement;
    this.terminoBusqueda.set(input.value);
  }
}