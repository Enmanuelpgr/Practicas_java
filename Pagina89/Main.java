package Pagina89;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);

        System.out.println("***REGISTRO DEL PERRO***");
        System.out.println("Nombre: ");
        String nombrePerro = entrada.nextLine();

        System.out.println("Raza: ");
        String razaPerro = entrada.nextLine();

        System.out.println("Fecha de Nacimiento (DD/MM/AAAA)");
        String fechaPerro = entrada.nextLine();

        System.out.println("Peso (ej. 14.6): ");
        float pesoPerro = entrada.nextFloat();

        System.out.print("Lugar de entrenamiento: ");
        String lugarPerro = entrada.nextLine();

        Perro miPerro = new Perro(nombrePerro, razaPerro, fechaPerro, pesoPerro, lugarPerro);

        System.out.println("\n ***REGISTRO DEL GATO***");
        System.out.print("Nombre: ");
        String nombreGato = entrada.nextLine();
        
        System.out.print("Raza: ");
        String razaGato = entrada.nextLine();
        
        System.out.print("Fecha de Nacimiento (DD/MM/AAAA): ");
        String fechaGato = entrada.nextLine();
        
        System.out.print("Peso (ej. 4.2): ");
        float pesoGato = entrada.nextFloat();
        
        System.out.print("Altura de salto en metros (ej. 2.5): ");
        double saltoGato = entrada.nextDouble();

        Gato miGato = new Gato(nombreGato, razaGato, fechaGato, pesoGato, saltoGato);

        System.out.println("\n--- RESULTADOS ---");
        
        miPerro.comer();
        miGato.comer();

        miPerro.comunicarse(); 
        miGato.comunicarse();  

        entrada.close();
    }
}


    
