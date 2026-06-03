package com.miproyecto;

public class Pedido {
    int idPedido;
    int idCliente;
    int idProducto;
    int cantidad;

    public Pedido(int idCliente, int idProducto, int cantidad) {
        this.idCliente = idCliente;
        this.idProducto = idProducto;
        this.cantidad = cantidad;
    }
}