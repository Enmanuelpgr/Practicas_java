package Pagina73;

import java.util.Scanner;

public class Ejercicio4 {
    public static void main(String[] args) {
        Scanner teclado = new Scanner(System.in);
        int[] arreglo = new int[10];
        
        for (int i = 0; i < 10; i++) {
            System.out.print("Llenando arreglo. Posición [" + i + "]: ");
            arreglo[i] = teclado.nextInt();
        }
        
        System.out.print("Ingrese el número que desea buscar: ");
        int numeroBuscado = teclado.nextInt();
        
        boolean encontrado = false;
        
        for (int i = 0; i < 10; i++) {
            if (arreglo[i] == numeroBuscado) {
                System.out.println("Número " + numeroBuscado + " encontrado en la posición (índice): " + i);
                encontrado = true;
            }
        }
        if (!encontrado) {
            System.out.println("El número " + numeroBuscado + " no se encuentra en el arreglo.");
        }
    }
}