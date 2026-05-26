package Pagina73;

import java.util.Scanner;

public class Ejercicio5 {
    public static void main(String[] args) {
        Scanner teclado = new Scanner(System.in);
        int[][] matrizA = new int[3][3];
        int[][] matrizB = new int[3][3];
        
        System.out.println("--- Ingreso de datos para la Matriz A ---");
        for(int i = 0; i < 3; i++) {
            for(int j = 0; j < 3; j++) {
                System.out.print("A[" + i + "][" + j + "]: ");
                matrizA[i][j] = teclado.nextInt();
            }
        }
        System.out.println("--- Ingreso de datos para la Matriz B ---");
        for(int i = 0; i < 3; i++) {
            for(int j = 0; j < 3; j++) {
                System.out.print("B[" + i + "][" + j + "]: ");
                matrizB[i][j] = teclado.nextInt();
            }
        }
        System.out.print("\nIngrese un número escalar para multiplicar: ");
        int escalar = teclado.nextInt();
        
        System.out.println("\n--- Matriz A por " + escalar + " ---");
        for(int i = 0; i < 3; i++) {
            for(int j = 0; j < 3; j++) {
                System.out.print((matrizA[i][j] * escalar) + "\t");
            }
            System.out.println();
        }
        System.out.println("\n--- Matriz B por " + escalar + " ---");
        for(int i = 0; i < 3; i++) {
            for(int j = 0; j < 3; j++) {
                System.out.print((matrizB[i][j] * escalar) + "\t");
            }
            System.out.println();
        }
        // Suma de matrices
        System.out.println("\n--- Suma (Matriz A + Matriz B) ---");
        for(int i = 0; i < 3; i++) {
            for(int j = 0; j < 3; j++) {
                System.out.print((matrizA[i][j] + matrizB[i][j]) + "\t");
            }
            System.out.println();
        }
        // Producto de matrices
        System.out.println("\n--- Producto (Matriz A * Matriz B) ---");
        int[][] producto = new int[3][3];
        for(int i = 0; i < 3; i++) {
            for(int j = 0; j < 3; j++) {
              
                for(int k = 0; k < 3; k++) {
                    producto[i][j] += matrizA[i][k] * matrizB[k][j];
                }
                System.out.print(producto[i][j] + "\t");
            }
            System.out.println();
        }
    }
}
