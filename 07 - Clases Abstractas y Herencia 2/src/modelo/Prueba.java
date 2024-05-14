package modelo;

public class Prueba {
    public static void main(String[] args) {
        Equipo equipo = new Equipo("Equipo Ejemplo");

        Delantero delantero = new Delantero("Martin Palermo", 0.8, 0.9);
        Defensor defensor = new Defensor("Walter Samuel", 0.7, 0.9);
        Arquero arquero = new Arquero("Oscar Cordoba", 0.6, 0.5, 0.9);

        equipo.agregarJugador(delantero);
        equipo.agregarJugador(defensor);
        equipo.agregarJugador(arquero);

        System.out.println("Jugadores en el equipo:");
        for (Jugador jugador : equipo.obtenerJugadores()) {
            System.out.println(jugador.getNombre());
        }

        System.out.println("Indice de Defensa del Equipo: " + equipo.indiceDefensa());
        System.out.println("Indice de Ataque del Equipo: " + equipo.indiceAtaque());
    }
}

