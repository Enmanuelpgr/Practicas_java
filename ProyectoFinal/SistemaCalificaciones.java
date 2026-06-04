package com.ProyectoFinal;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Scanner;

class Estudiante implements Comparable<Estudiante> {
    String nombre;
    String apellido;
    int matematica;
    int lengua;
    int naturales;
    int sociales;
    int promedio;
    String literal;

    public Estudiante(String nombre, String apellido, int matematica, int lengua, int naturales, int sociales) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.matematica = matematica;
        this.lengua = lengua;
        this.naturales = naturales;
        this.sociales = sociales;
        this.promedio = calcularPromedio();
        this.literal = calcularLiteral();
    }

    private int calcularPromedio() {
        int cantidadMaterias = 4;
        int suma = matematica + lengua + naturales + sociales;
        try {
            return suma / cantidadMaterias;
        } catch (ArithmeticException e) {
            return 0;
        }
    }

    private String calcularLiteral() {
        if (promedio >= 90) {
            return "A";
        } else if (promedio >= 80) {
            return "B";
        } else if (promedio >= 70) {
            return "C";
        } else {
            return "F";
        }
    }

    @Override
    public int compareTo(Estudiante otro) {
        return this.apellido.compareToIgnoreCase(otro.apellido);
    }

    public String formatoArchivo() {
        return nombre + "," + apellido + "," + matematica + "," + lengua + "," + naturales + "," + sociales;
    }
}

public class SistemaCalificaciones {
    static Scanner scanner = new Scanner(System.in);

    public static void main(String[] args) {
        boolean ejecutar = true;
        while (ejecutar) {
            mostrarMenu();
            String opcion = scanner.nextLine();

            if (opcion.equals("3") || opcion.equals("\u001B")) {
                ejecutar = false;
            } else if (opcion.equals("1")) {
                registrarCalificaciones();
            } else if (opcion.equals("2")) {
                generarReporte();
            } else {
                System.out.println("Opción no válida. Intente de nuevo.");
            }
        }
    }

    private static void mostrarMenu() {
        System.out.println("=========================================");
        System.out.println("          COLEGIO DIOS ES BUENO          ");
        System.out.println("        SISTEMA DE CALIFICACIONES        ");
        System.out.println("=========================================");
        System.out.println("1- Registro de calificaciones");
        System.out.println("2- Reporte calificaciones por mes");
        System.out.println("3- Presione <ESC> para salir");
        System.out.println("=========================================");
        System.out.print("Elija la opción deseada y pulse <ENTER>: ");
    }

    private static void registrarCalificaciones() {
        try {
            System.out.print("Mes (ej. Enero): ");
            String mes = scanner.nextLine();
            System.out.print("Curso (ej. 1B): ");
            String curso = scanner.nextLine();
            System.out.print("Nombre: ");
            String nombre = scanner.nextLine();
            System.out.print("Apellido: ");
            String apellido = scanner.nextLine();
            System.out.print("Matemática: ");
            int mat = Integer.parseInt(scanner.nextLine());
            System.out.print("Lengua: ");
            int len = Integer.parseInt(scanner.nextLine());
            System.out.print("Naturales: ");
            int nat = Integer.parseInt(scanner.nextLine());
            System.out.print("Sociales: ");
            int soc = Integer.parseInt(scanner.nextLine());

            Estudiante estudiante = new Estudiante(nombre, apellido, mat, len, nat, soc);
            guardarEnArchivo(mes, curso, estudiante);
            System.out.println("Datos guardados exitosamente.");
        } catch (NumberFormatException e) {
            System.out.println("Error: Debes ingresar números enteros para las calificaciones. Intenta de nuevo.");
        } catch (Exception e) {
            System.out.println("Ocurrió un error inesperado al registrar.");
        }
    }

    private static void guardarEnArchivo(String mes, String curso, Estudiante estudiante) throws IOException {
        String nombreArchivo = mes + "_" + curso + ".txt";
        FileWriter fw = new FileWriter(nombreArchivo, true);
        BufferedWriter bw = new BufferedWriter(fw);
        bw.write(estudiante.formatoArchivo());
        bw.newLine();
        bw.close();
    }

    private static void generarReporte() {
        System.out.print("Ingrese el mes del reporte: ");
        String mes = scanner.nextLine();
        System.out.print("Ingrese el curso: ");
        String curso = scanner.nextLine();

        String nombreArchivo = mes + "_" + curso + ".txt";
        File archivo = new File(nombreArchivo);

        if (!archivo.exists()) {
            System.out.println("No se encontraron registros para el mes " + mes + " y curso " + curso + ".");
            return;
        }

        List<Estudiante> estudiantes = new ArrayList<>();
        try (BufferedReader br = new BufferedReader(new FileReader(archivo))) {
            String linea;
            while ((linea = br.readLine()) != null) {
                String[] datos = linea.split(",");
                if (datos.length == 6) {
                    estudiantes.add(new Estudiante(
                        datos[0], datos[1],
                        Integer.parseInt(datos[2]), Integer.parseInt(datos[3]),
                        Integer.parseInt(datos[4]), Integer.parseInt(datos[5])
                    ));
                }
            }
        } catch (IOException | NumberFormatException e) {
            System.out.println("Error al leer el archivo de calificaciones.");
            return;
        }

        Collections.sort(estudiantes);

        System.out.println("\nReporte de Calificaciones de " + mes);
        System.out.println("Curso: " + curso);
        System.out.println("=========================================================================================");
        System.out.printf("%-10s %-10s %-12s %-10s %-10s %-10s %-10s %-10s%n", "Nombre", "Apellido", "Matematica", "Lengua", "Naturales", "Sociales", "Promedio", "Literal");
        System.out.println("=========================================================================================");

        for (Estudiante e : estudiantes) {
            System.out.printf("%-10s %-10s %-12d %-10d %-10d %-10d %-10d %-10s%n",
                    e.nombre, e.apellido, e.matematica, e.lengua, e.naturales, e.sociales, e.promedio, e.literal);
        }
        System.out.println("=========================================================================================");
        System.out.println("Total de estudiantes: " + estudiantes.size() + "\n");
    }
}