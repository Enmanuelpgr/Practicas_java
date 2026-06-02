package pagina142;

// clase padre, abstracta como dice el ejercicio
public abstract class Mamiferos implements IMamiferos {
    String nombre;
    String raza;
    String tipoAnimal;
    String fechaNacimiento;
    float peso;

    // constructor
    public Mamiferos(String nombre, String raza, String tipoAnimal, String fechaNacimiento, float peso) {
        this.nombre = nombre;
        this.raza = raza;
        this.tipoAnimal = tipoAnimal;
        this.fechaNacimiento = fechaNacimiento;
        this.peso = peso;
    }

    public void comer() {
        System.out.println(nombre + " está comiendo");
    }

    public void TipoAnimal() {
        System.out.println("El animal es un: " + tipoAnimal);
    }
}