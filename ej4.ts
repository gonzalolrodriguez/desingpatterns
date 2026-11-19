interface IInventario {
  agregarEquipo(nombre: string, tipo: string, estado: string): void;
  listarEquipos(): any[];
}

class InventarioViejo {
  private items: { nombre: string; tipo: string; estado: string }[] = [];

  public agregarItem(item: {
    nombre: string;
    tipo: string;
    estado: string;
  }): void {
    this.items.push(item);
  }

  public obtenerItems(): { nombre: string; tipo: string; estado: string }[] {
    return this.items;
  }
}

class AdaptadorInventario implements IInventario {
  private inventarioViejo: InventarioViejo;

  constructor(inventarioViejo: InventarioViejo) {
    this.inventarioViejo = inventarioViejo;
  }

  public agregarEquipo(nombre: string, tipo: string, estado: string): void {
    const nuevoItem = { nombre, tipo, estado };
    this.inventarioViejo.agregarItem(nuevoItem);
  }

  // Mapea la llamada de listar equipos
  public listarEquipos(): any[] {
    return this.inventarioViejo.obtenerItems();
  }
}

const inventarioViejo = new InventarioViejo();
const adaptador = new AdaptadorInventario(inventarioViejo);
adaptador.agregarEquipo("Servidor Dell", "Servidor", "disponible");
console.log(adaptador.listarEquipos());
// [{ nombre: "Servidor Dell", tipo: "Servidor", estado: "disponible" }]

export {};
