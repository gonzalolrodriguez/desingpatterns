class Producto {
  nombre: string;
  precio: number;
  categoria: string;
  stock: number;

  constructor(nombre: string, precio: number, categoria: string, stock: number) {
    this.nombre = nombre;
    this.precio = precio;
    this.categoria = categoria;
    this.stock = stock;
  }

  describir(): string {
    return `${this.nombre} (${this.categoria}): $${this.precio} — ${this.stock} unidades`;
  }

  hayStock(cantidad: number): boolean {
    return this.stock >= cantidad;
  }

  // Se lanza un Error en lugar de mostrar un mensaje porque una venta fallida
  // no debe pasar desapercibida: quien llama al método decide cómo manejarla.
  venderUnidades(cantidad: number): void {
    if (cantidad <= 0) {
      throw new Error("La cantidad a vender debe ser mayor que 0.");
    }
    if (this.hayStock(cantidad)) {
      this.stock -= cantidad;
      console.log(`Venta realizada exitosamente: se vendieron ${cantidad} unidades de ${this.nombre}.`);
    } else {
      throw new Error(`Error de stock: No hay suficientes unidades de '${this.nombre}' para realizar la venta (solicitado: ${cantidad}, disponible: ${this.stock}).`);
    }
  }

  aplicarDescuento(porcentaje: number): number {
    if (porcentaje < 0 || porcentaje > 100) {
      throw new Error("El porcentaje de descuento debe estar entre 0 y 100.");
    }
    const descuento = (this.precio * porcentaje) / 100;
    return this.precio - descuento;
  }
}

const prod = new Producto("Teclado Gamer", 15000, "electrónica", 10);
console.log("Descripción inicial:", prod.describir());
console.log("¿Hay stock de 5?:", prod.hayStock(5));

console.log("Aplicando descuento simulado del 10% (Precio final):", prod.aplicarDescuento(10));
console.log("Precio original sigue siendo:", prod.precio);

console.log("Vendiendo 4 unidades...");
prod.venderUnidades(4);
console.log("Descripción después de la venta:", prod.describir());

try {
  console.log("Intentando vender 10 unidades (debe fallar)...");
  prod.venderUnidades(10);
} catch (e: any) {
  console.log("Capturado esperado:", e.message);
}

try {
  console.log("Intentando vender -3 unidades (debe fallar)...");
  prod.venderUnidades(-3);
} catch (e: any) {
  console.log("Capturado esperado:", e.message);
}
