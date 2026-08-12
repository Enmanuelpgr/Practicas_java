import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  private apiUrl = 'http://localhost:3000/api/empleados';

  constructor(private http: HttpClient) {}

  obtenerEmpleados(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  crearEmpleado(empleado: any): Observable<any> {
    return this.http.post(this.apiUrl, empleado);
  }

  actualizarEmpleado(id: string, empleado: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, empleado);
  }

  eliminarEmpleado(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}