interface Equipo {
  nombre: string;
  tipo: string;
  estado: string;
}

interface Inventario {
  agregarEquipo(nombre: string, tipo: string, estado: string): void;
  listarEquipos(): Equipo[];
}

class InventarioViejo {
  private items: Equipo[] = [];

  public agregarItem(item: Equipo): void {
    this.items.push(item);
  }

  public obtenerItems(): Equipo[] {
    return this.items;
  }
}

class AdaptadorInventario implements Inventario {
  private inventarioViejo: InventarioViejo;

  constructor(inventarioViejo: InventarioViejo) {
    this.inventarioViejo = inventarioViejo;
  }

  public agregarEquipo(nombre: string, tipo: string, estado: string): void {
    const nuevoItem = { nombre, tipo, estado };
    this.inventarioViejo.agregarItem(nuevoItem);
  }

  // Mapea la llamada de listar equipos
  public listarEquipos(): Equipo[] {
    return this.inventarioViejo.obtenerItems();
  }
}

const inventarioViejo = new InventarioViejo();
const adaptador = new AdaptadorInventario(inventarioViejo);
adaptador.agregarEquipo("Servidor Dell", "Servidor", "disponible");
console.log(adaptador.listarEquipos());
// [{ nombre: "Servidor Dell", tipo: "Servidor", estado: "disponible" }]

export {};
