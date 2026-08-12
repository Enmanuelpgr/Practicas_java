import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductoService } from '../../services/producto'; 

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './productos.html',
  styleUrls: ['./productos.css']
})
export class ProductosComponent implements OnInit {
  productos: any[] = [];
  
  nuevoProducto: any = {
    nombre: '',
    categoria: '',
    cantidad: null,
    precio: null
  };

  productoEnEdicion: any = null;
  terminoBusqueda: string = '';
  notificacion: { mensaje: string, tipo: string, visible: boolean } = { mensaje: '', tipo: '', visible: false };

  modalEliminarVisible: boolean = false;
  productoIdAEliminar: any = null;

  constructor(private productoService: ProductoService) {}

  ngOnInit(): void {
    this.obtener();
  }

  obtener() {
    this.productoService.obtenerProductos().subscribe(data => {
      this.productos = data;
    });
  }

  get productosFiltrados() {
    if (!this.terminoBusqueda) return this.productos;
    return this.productos.filter(p => 
      p.nombre.toLowerCase().includes(this.terminoBusqueda.toLowerCase()) ||
      p.categoria.toLowerCase().includes(this.terminoBusqueda.toLowerCase()) ||
      (p.sku && p.sku.toLowerCase().includes(this.terminoBusqueda.toLowerCase()))
    );
  }

  mostrarNotificacion(mensaje: string, tipo: 'exito' | 'error') {
    this.notificacion = { mensaje, tipo, visible: true };
    setTimeout(() => {
      this.notificacion.visible = false;
    }, 3500); 
  }

  guardarProducto() {
    if (this.nuevoProducto.cantidad < 0 || this.nuevoProducto.precio < 0) {
      this.mostrarNotificacion('Error: La cantidad y el precio no pueden ser menores a cero.', 'error');
      return; 
    }

    if (this.productoEnEdicion) {
      const id = this.productoEnEdicion.id || this.productoEnEdicion._id;
      
      // Si estamos editando un producto antiguo que no tiene SKU, le generamos uno
      if (!this.nuevoProducto.sku) {
        this.nuevoProducto.sku = 'PROD-' + Date.now();
      }

      this.productoService.actualizarProducto(id, this.nuevoProducto).subscribe(() => {
        this.mostrarNotificacion('Registro actualizado exitosamente', 'exito');
        this.finalizarGuardado();
      });
    } else {
      // Generamos el código automático para los productos nuevos
      this.nuevoProducto.sku = 'PROD-' + Date.now();
      
      this.productoService.crearProducto(this.nuevoProducto).subscribe(() => {
        this.mostrarNotificacion('Producto ingresado al inventario', 'exito');
        this.finalizarGuardado();
      });
    }
  }

  finalizarGuardado() {
    this.obtener(); 
    this.nuevoProducto = { nombre: '', categoria: '', cantidad: null, precio: null }; 
    this.productoEnEdicion = null;
  }

  abrirModalEliminar(id: any) {
    this.productoIdAEliminar = id;
    this.modalEliminarVisible = true;
  }

  cerrarModalEliminar() {
    this.modalEliminarVisible = false;
    this.productoIdAEliminar = null;
  }

  confirmarEliminacion() {
    if (this.productoIdAEliminar) {
      this.productoService.eliminarProducto(this.productoIdAEliminar).subscribe(() => {
        this.mostrarNotificacion('Producto eliminado del sistema', 'exito');
        this.obtener(); 
        this.cerrarModalEliminar(); 
      });
    }
  }

  editarProducto(producto: any) {
    this.productoEnEdicion = producto;
    this.nuevoProducto = { ...producto }; 
  }

  cancelarEdicion() {
    this.nuevoProducto = { nombre: '', categoria: '', cantidad: null, precio: null };
    this.productoEnEdicion = null;
  }
}