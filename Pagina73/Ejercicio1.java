package Pagina73;
import java.util.Scanner;

public class Ejercicio1 {
    public static void main(String[] args) {
        Scanner teclado = new Scanner(System.in);
        double[] numeros = new double[10];
        double suma = 0;

        for (int i = 0; i < 10; i++){
            System.out.println("ingrese el numero " + (i + 1) + ":");
            numeros[i] = teclado.nextDouble();
            suma += numeros[i]; 
        }
        double promedio = suma / 10;

        System.out.println("***RESULTADOS***");
        System.out.println("La suma es: " + suma);
        System.out.println("El promedio es " + promedio);
    }

    
}
