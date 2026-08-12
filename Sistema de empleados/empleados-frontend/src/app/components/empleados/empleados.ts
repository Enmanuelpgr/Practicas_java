import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EmpleadoService } from '../../services/empleado'; 

@Component({
  selector: 'app-empleados',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './empleados.html',
  styleUrls: ['./empleados.css']
})
export class EmpleadosComponent implements OnInit {
  empleados: any[] = [];
  
  nuevoEmpleado: any = { nombre: '', cargo: '', departamento: '', salario: null, correo: '' };
  empleadoEnEdicion: any = null;
  terminoBusqueda: string = '';
  notificacion = { mensaje: '', tipo: '', visible: false };
  modalEliminarVisible = false;
  empleadoIdAEliminar: any = null;

  constructor(private empleadoService: EmpleadoService) {}

  ngOnInit(): void {
    this.obtener();
  }

  obtener() {
    this.empleadoService.obtenerEmpleados().subscribe(data => {
      this.empleados = data;
    });
  }

  get empleadosFiltrados() {
    if (!this.terminoBusqueda) return this.empleados;
    return this.empleados.filter(e => 
      e.nombre.toLowerCase().includes(this.terminoBusqueda.toLowerCase()) ||
      e.cargo.toLowerCase().includes(this.terminoBusqueda.toLowerCase()) ||
      (e.empleadoId && e.empleadoId.toLowerCase().includes(this.terminoBusqueda.toLowerCase()))
    );
  }

  mostrarNotificacion(mensaje: string, tipo: 'exito' | 'error') {
    this.notificacion = { mensaje, tipo, visible: true };
    setTimeout(() => this.notificacion.visible = false, 3500); 
  }

  guardarEmpleado() {
    if (this.nuevoEmpleado.salario < 0) {
      this.mostrarNotificacion('Error: El salario no puede ser negativo.', 'error');
      return; 
    }

    if (this.empleadoEnEdicion) {
      const id = this.empleadoEnEdicion._id;
      if (!this.nuevoEmpleado.empleadoId) {
        this.nuevoEmpleado.empleadoId = 'EMP-' + Date.now();
      }
      this.empleadoService.actualizarEmpleado(id, this.nuevoEmpleado).subscribe(() => {
        this.mostrarNotificacion('Empleado actualizado', 'exito');
        this.finalizarGuardado();
      });
    } else {
      this.nuevoEmpleado.empleadoId = 'EMP-' + Date.now();
      this.empleadoService.crearEmpleado(this.nuevoEmpleado).subscribe(() => {
        this.mostrarNotificacion('Empleado registrado', 'exito');
        this.finalizarGuardado();
      });
    }
  }

  finalizarGuardado() {
    this.obtener(); 
    this.nuevoEmpleado = { nombre: '', cargo: '', departamento: '', salario: null, correo: '' }; 
    this.empleadoEnEdicion = null;
  }

  abrirModalEliminar(id: any) {
    this.empleadoIdAEliminar = id;
    this.modalEliminarVisible = true;
  }

  cerrarModalEliminar() {
    this.modalEliminarVisible = false;
    this.empleadoIdAEliminar = null;
  }

  confirmarEliminacion() {
    if (this.empleadoIdAEliminar) {
      this.empleadoService.eliminarEmpleado(this.empleadoIdAEliminar).subscribe(() => {
        this.mostrarNotificacion('Empleado eliminado', 'exito');
        this.obtener(); 
        this.cerrarModalEliminar(); 
      });
    }
  }

  editarEmpleado(empleado: any) {
    this.empleadoEnEdicion = empleado;
    this.nuevoEmpleado = { ...empleado }; 
  }

  cancelarEdicion() {
    this.nuevoEmpleado = { nombre: '', cargo: '', departamento: '', salario: null, correo: '' };
    this.empleadoEnEdicion = null;
  }
}