package pagina142;

// clase del gato
public class Gato extends Mamiferos {
    double alturaSalto;

    public Gato(String nombre, String raza, String tipoAnimal, String fechaNacimiento, float peso, double alturaSalto) {
        super(nombre, raza, tipoAnimal, fechaNacimiento, peso);
        this.alturaSalto = alturaSalto;
    }

    // hace miau
    @Override
    public void comunicarse() {
        System.out.println("miau miau");
    }
}