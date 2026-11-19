abstract class EquipoInformatico {
  protected nombre: string;
  protected ram: string;
  protected procesador: string;

  constructor(nombre: string, ram: string, procesador: string) {
    this.nombre = nombre;
    this.ram = ram;
    this.procesador = procesador;
  }

  public abstract detalles(): string;
}

class EquipoNotebook extends EquipoInformatico {
  public detalles(): string {
    return `Tipo: Notebook, Nombre: ${this.nombre}, RAM: ${this.ram}, Procesador: ${this.procesador}`;
  }
}

class EquipoDesktop extends EquipoInformatico {
  public detalles(): string {
    return `Tipo: Desktop, Nombre: ${this.nombre}, RAM: ${this.ram}, Procesador: ${this.procesador}`;
  }
}

class EquipoServidor extends EquipoInformatico {
  public detalles(): string {
    return `Tipo: Servidor, Nombre: ${this.nombre}, RAM: ${this.ram}, Procesador: ${this.procesador}`;
  }
}

class EquipoFactory {
  public crearEquipo(
    tipo: string,
    nombre: string,
    ram: string,
    procesador: string,
  ): EquipoInformatico {
    if (tipo === "Notebook") {
      return new EquipoNotebook(nombre, ram, procesador);
    } else if (tipo === "Desktop") {
      return new EquipoDesktop(nombre, ram, procesador);
    } else if (tipo === "Servidor") {
      return new EquipoServidor(nombre, ram, procesador);
    } else {
      throw new Error(`El tipo de equipo '${tipo}' no es reconocido`);
    }
  }
}

const factory = new EquipoFactory();
const Notebook = factory.crearEquipo("Notebook", "Dell XPS", "16GB", "i7");
console.log(Notebook.detalles());
// Tipo: Notebook, Nombre: Dell XPS, RAM: 16GB, Procesador: i7

export {};
