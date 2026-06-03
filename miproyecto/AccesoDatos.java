package com.miproyecto;

import java.sql.Connection;
import java.sql.PreparedStatement;

public class AccesoDatos {
    ConexionBD conexion = new ConexionBD();

    public void guardarCliente(Cliente c) {
        try {
            Connection con = conexion.conectar();
            PreparedStatement ps = con.prepareStatement("INSERT INTO Cliente (nombre, telefono) VALUES (?, ?)");
            ps.setString(1, c.nombre);
            ps.setString(2, c.telefono);
            ps.executeUpdate();
            con.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public void guardarProducto(Producto p) {
        try {
            Connection con = conexion.conectar();
            PreparedStatement ps = con.prepareStatement("INSERT INTO Productos (nombre, precio) VALUES (?, ?)");
            ps.setString(1, p.nombre);
            ps.setFloat(2, p.precio);
            ps.executeUpdate();
            con.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public void guardarPedido(Pedido p) {
        try {
            Connection con = conexion.conectar();
            PreparedStatement ps = con.prepareStatement("INSERT INTO Pedidos (id_cliente, id_producto, cantidad) VALUES (?, ?, ?)");
            ps.setInt(1, p.idCliente);
            ps.setInt(2, p.idProducto);
            ps.setInt(3, p.cantidad);
            ps.executeUpdate();
            con.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
