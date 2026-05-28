package Pagina89;

public class Perro extends Mamifero {

    private String lugarEntrenamiento;

    public Perro (String nombre, String raza, String fechaNacimiento, float peso, String lugarEntrenamiento){

        super(nombre, raza, fechaNacimiento, peso);
        this.lugarEntrenamiento = lugarEntrenamiento;
    }
    @Override

    public void comunicarse(){
        System.out.println(this.nombre + " dice: guau guau");
    }
}
