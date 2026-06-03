package com.miproyecto;

import java.sql.Connection;
import java.sql.DriverManager;

public class ConexionBD {
  
    String url = "jdbc:sqlserver://localhost:1433;databaseName=SistemaPedidos;encrypt=true;trustServerCertificate=true;";
    String user = "sa";
    String pass = "1234";

    public Connection conectar() {
        Connection con = null;
        try {
            con = DriverManager.getConnection(url, user, pass);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return con;
    }
}