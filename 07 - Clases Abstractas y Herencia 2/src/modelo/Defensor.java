package modelo;

public class Defensor extends Jugador {

    public Defensor(String nombre, double velocidad, double potencia) {
        super(nombre, velocidad, potencia);
    }

    @Override
    public double indiceDefensa() {
        return velocidad * velocidad;
    }

    @Override
    public double indiceAtaque() {
        return potencia * potencia;
    }
}

