import { Injectable, signal } from '@angular/core';
import { Producto } from './producto';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  items = signal<Producto[]>([]);

  agregar(producto: Producto) {
    this.items.update(actuales => [...actuales, producto]);
  }

  obtenerTotal() {
    return this.items().reduce((total, item) => total + item.precio, 0);
  }
}