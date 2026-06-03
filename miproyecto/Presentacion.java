package com.miproyecto;

import java.util.Scanner;

public class Presentacion {
    public static void main(String[] args) {
        Scanner leer = new Scanner(System.in);
        LogicaNegocio logica = new LogicaNegocio();

        System.out.println("--- 1. REGISTRO DE CLIENTE ---");
        System.out.print("Nombre: ");
        String nomC = leer.nextLine();
        System.out.print("Telefono: ");
        String telC = leer.nextLine();
        logica.registrarCliente(nomC, telC);

        System.out.println("\n--- 2. REGISTRO DE PRODUCTO ---");
        System.out.print("Nombre del producto: ");
        String nomP = leer.nextLine();
        System.out.print("Precio: ");
        float preP = leer.nextFloat();
        logica.registrarProducto(nomP, preP);

        leer.nextLine();

        System.out.println("\n--- 3. REGISTRO DE PEDIDO ---");
        System.out.print("ID del Cliente (numero): ");
        int idC = leer.nextInt();
        System.out.print("ID del Producto (numero): ");
        int idP = leer.nextInt();
        System.out.print("Cantidad: ");
        int cant = leer.nextInt();
        logica.registrarPedido(idC, idP, cant);

        System.out.println("\nProceso terminado. Revisa tu base de datos.");
        leer.close();
    }
}