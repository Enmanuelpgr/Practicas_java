import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { KeyValuePipe } from '@angular/common'; // <-- 1. Importamos la herramienta para leer diccionarios
import { ProductoService, Producto } from '../../services/producto';
import { CarritoService } from '../../services/carrito';

@Component({
  selector: 'app-detalle-producto',
  standalone: true,
  imports: [RouterLink, KeyValuePipe], // <-- 2. La activamos para usarla en el HTML
  templateUrl: './detalle-producto.html',
  styleUrl: './detalle-producto.css'
})
export class DetalleProductoComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private productoService = inject(ProductoService);
  private carritoService = inject(CarritoService);

  producto: Producto | undefined;

  ngOnInit() {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      const id = Number(idParam);
      this.producto = this.productoService.obtenerProductoPorId(id);
    }
  }

  agregarAlCarrito() {
    if (this.producto) {
      this.carritoService.agregar(this.producto);
      alert(`¡${this.producto.nombre} añadido a tu carrito! 🛒`);
    }
  }
}