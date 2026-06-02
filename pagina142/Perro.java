package pagina142;

// clase del perro
public class Perro extends Mamiferos {
    String lugarEntrenamiento;

    public Perro(String nombre, String raza, String tipoAnimal, String fechaNacimiento, float peso, String lugarEntrenamiento) {
        super(nombre, raza, tipoAnimal, fechaNacimiento, peso);
        this.lugarEntrenamiento = lugarEntrenamiento;
    }

    // hace guau
    @Override
    public void comunicarse() {
        System.out.println("guau guau");
    }
}
