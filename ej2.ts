abstract class EquipoInformatico {
  protected nombre: string;

  constructor(nombre: string) {
    this.nombre = nombre;
  }

  public abstract detalles(): string;
}

class Notebook extends EquipoInformatico {
  private ram: string;
  private procesador: string;

  constructor(nombre: string, ram: string, procesador: string) {
    super(nombre);
    this.ram = ram;
    this.procesador = procesador;
  }

  public detalles(): string {
    return `Tipo: Notebook, Nombre: ${this.nombre}, RAM: ${this.ram}, Procesador: ${this.procesador}`;
  }
}

class Desktop extends EquipoInformatico {
  private ram: string;
  private procesador: string;

  constructor(nombre: string, ram: string, procesador: string) {
    super(nombre);
    this.ram = ram;
    this.procesador = procesador;
  }

  public detalles(): string {
    return `Tipo: Desktop, Nombre: ${this.nombre}, RAM: ${this.ram}, Procesador: ${this.procesador}`;
  }
}

class Servidor extends EquipoInformatico {
  private ram: string;
  private procesador: string;

  constructor(nombre: string, ram: string, procesador: string) {
    super(nombre);
    this.ram = ram;
    this.procesador = procesador;
  }

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
      return new Notebook(nombre, ram, procesador);
    } else if (tipo === "Desktop") {
      return new Desktop(nombre, ram, procesador);
    } else if (tipo === "Servidor") {
      return new Servidor(nombre, ram, procesador);
    } else {
      throw new Error(`El tipo de equipo '${tipo}' no es reconocido`);
    }
  }
}

const factory = new EquipoFactory();
const notebook = factory.crearEquipo("Notebook", "Dell XPS", "16GB", "i7");
console.log(notebook.detalles());
// Tipo: Notebook, Nombre: Dell XPS, RAM: 16GB, Procesador: i7

export {};
