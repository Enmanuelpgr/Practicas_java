package Pagina89;

public class Mamifero {
    protected String nombre;
    protected String raza;
    protected String fechaNacimiento;
    protected float peso;


public Mamifero(String nombre, String raza, String fechaNacimiento, float peso){
    this.nombre = nombre;
    this.raza = raza;
    this.fechaNacimiento = fechaNacimiento;
    this.peso = peso;
}
public void comer(){
    System.out.println(this.nombre + " esta comiendo.");
}
public void comunicarse(){
    System.out.println(this.nombre + "hace un sonido generico de animal");
}
    }

