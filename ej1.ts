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

  venderUnidades(cantidad: number): void {
    if (this.hayStock(cantidad)) {
      this.stock -= cantidad;
      console.log(`Venta realizada exitosamente: se vendieron ${cantidad} unidades de ${this.nombre}.`);
    } else {
      // Elegimos lanzar un Error ya que en un sistema de ventas real intentar procesar una transacción
      // sin suficiente stock es una condición de fallo crítica que debe detener el flujo de la operación
      // (por ejemplo, evitar cargos a tarjetas de crédito o actualizaciones inconsistentes en base de datos).
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

// Bloque de prueba
console.log("--- Pruebas Ejercicio 1 ---");
const prod = new Producto("Teclado Gamer", 15000, "electrónica", 10);
console.log("Descripción inicial:", prod.describir());
console.log("¿Hay stock de 5?:", prod.hayStock(5));
console.log("¿Hay stock de 12?:", prod.hayStock(12));

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
