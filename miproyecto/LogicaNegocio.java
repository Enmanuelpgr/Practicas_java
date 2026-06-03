package com.miproyecto;

public class LogicaNegocio {
    AccesoDatos datos = new AccesoDatos();

    public void registrarCliente(String nombre, String telefono) {
        if (!nombre.isEmpty()) {
            Cliente c = new Cliente(nombre, telefono);
            datos.guardarCliente(c);
        }
    }

    public void registrarProducto(String nombre, float precio) {
        if (precio > 0) {
            Producto p = new Producto(nombre, precio);
            datos.guardarProducto(p);
        }
    }

    public void registrarPedido(int idCliente, int idProducto, int cantidad) {
        if (cantidad > 0) {
            Pedido p = new Pedido(idCliente, idProducto, cantidad);
            datos.guardarPedido(p);
        }
    }
}