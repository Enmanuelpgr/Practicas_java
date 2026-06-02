package pagina142;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner leer = new Scanner(System.in);

        // Datos del perro
        System.out.println("--- Llena los datos del Perro ---");
        System.out.print("Nombre: ");
        String nomP = leer.nextLine();
        System.out.print("Raza: ");
        String razP = leer.nextLine();
        System.out.print("Tipo: ");
        String tipP = leer.nextLine();
        System.out.print("Fecha de nacimiento: ");
        String fecP = leer.nextLine();
        System.out.print("Peso: ");
        float pesP = leer.nextFloat();
        leer.nextLine(); 
        System.out.print("Lugar de entrenamiento: ");
        String lugP = leer.nextLine();

        Perro elPerro = new Perro(nomP, razP, tipP, fecP, pesP, lugP);

        // Datos del gato
        System.out.println("\n--- Llena los datos del Gato ---");
        System.out.print("Nombre: ");
        String nomG = leer.nextLine();
        System.out.print("Raza: ");
        String razG = leer.nextLine();
        System.out.print("Tipo: ");
        String tipG = leer.nextLine();
        System.out.print("Fecha de nacimiento: ");
        String fecG = leer.nextLine();
        System.out.print("Peso: ");
        float pesG = leer.nextFloat();
        System.out.print("Altura de salto: ");
        double altG = leer.nextDouble();

        Gato elGato = new Gato(nomG, razG, tipG, fecG, pesG, altG);

        // probando los metodos a ver si hablan
        System.out.println("\n--- Resultados ---");
        System.out.print("El perro reporta: ");
        elPerro.comunicarse();

        System.out.print("El gato reporta: ");
        elGato.comunicarse();
    }
}
