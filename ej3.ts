export class Empleado {
  protected nombre: string;
  protected antiguedad: number;

  constructor(nombre: string, antiguedad: number) {
    this.nombre = nombre;
    this.antiguedad = antiguedad;
  }

  calcularSueldo(): number {
    return 0;
  }

  describir(): string {
    return `${this.nombre} (${this.antiguedad} años) — sueldo: $${this.calcularSueldo()}`;
  }
}

export class EmpleadoFijo extends Empleado {
  private sueldoBase: number;

  constructor(nombre: string, antiguedad: number, sueldoBase: number) {
    super(nombre, antiguedad);
    this.sueldoBase = sueldoBase;
  }

  calcularSueldo(): number {
    const bonoAntiguedad = this.sueldoBase * 0.02 * this.antiguedad;
    return this.sueldoBase + bonoAntiguedad;
  }
}

// Bloque de prueba
console.log("--- Pruebas Ejercicio 3 ---");
const empFijo1 = new EmpleadoFijo("Juan", 3, 50000);
const empFijo2 = new EmpleadoFijo("María", 10, 60000);

console.log(empFijo1.describir());
console.log(empFijo2.describir());
