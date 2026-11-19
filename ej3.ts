interface Observador {
  notificar(nombreEquipo: string, estado: string): void;
}

// Observador concreto
class Soporte implements Observador {
  public notificar(nombreEquipo: string, estado: string): void {
    console.log(
      `Soporte notificado: ${nombreEquipo} ha cambiado su estado a ${estado}.`,
    );
  }
}

class Equipo {
  private nombre: string;
  private tipo: string;
  private estado: string;

  private observadores: Observador[] = [];

  constructor(nombre: string, tipo: string, estado: string) {
    this.nombre = nombre;
    this.tipo = tipo;
    this.estado = estado;
  }

  public agregarObservador(observador: Observador): void {
    this.observadores.push(observador);
  }

  public eliminarObservador(observador: Observador): void {
    this.observadores = this.observadores.filter((obs) => obs !== observador);
  }

  public cambiarEstado(nuevoEstado: string): void {
    this.estado = nuevoEstado;
    this.notificarObservadores();
  }

  // Notificamos a todos los observadores registrados
  private notificarObservadores(): void {
    for (const observador of this.observadores) {
      observador.notificar(this.nombre, this.estado);
    }
  }
}

const soporte = new Soporte();
const equipo = new Equipo("Notebook HP", "Portátil", "disponible");
equipo.agregarObservador(soporte);
equipo.cambiarEstado("en reparación");

export {};
