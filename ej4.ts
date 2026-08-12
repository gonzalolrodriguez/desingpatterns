import { Empleado, EmpleadoFijo } from "./ej3";

class EmpleadoPorHoras extends Empleado {
  private horasTrabajadas: number;
  private valorHora: number;

  constructor(nombre: string, antiguedad: number, horasTrabajadas: number, valorHora: number) {
    super(nombre, antiguedad);
    this.horasTrabajadas = horasTrabajadas;
    this.valorHora = valorHora;
  }

  calcularSueldo(): number {
    return this.horasTrabajadas * this.valorHora;
  }
}

class EmpleadoPorComision extends Empleado {
  private ventasDelMes: number;
  private porcentajeComision: number;

  constructor(nombre: string, antiguedad: number, ventasDelMes: number, porcentajeComision: number) {
    super(nombre, antiguedad);
    this.ventasDelMes = ventasDelMes;
    this.porcentajeComision = porcentajeComision;
  }

  calcularSueldo(): number {
    return this.ventasDelMes * (this.porcentajeComision / 100);
  }
}

function calcularNomina(empleados: Empleado[]): number {
  return empleados.reduce((total, emp) => total + emp.calcularSueldo(), 0);
}

// Bloque de prueba
console.log("--- Pruebas Ejercicio 4 ---");

const nomina: Empleado[] = [
  new EmpleadoFijo("Ana", 5, 80000),             // 80000 + (80000 * 0.02 * 5) = 80000 + 8000 = 88000
  new EmpleadoPorHoras("Carlos", 2, 120, 800),   // 120 * 800 = 96000
  new EmpleadoPorComision("Luis", 4, 1500000, 5) // 1500000 * 0.05 = 75000
];

console.log("Describiendo empleados y sus sueldos:");
for (const emp of nomina) {
  console.log(emp.describir());
}

const totalNomina = calcularNomina(nomina);
console.log(`\nTotal Nómina a pagar: $${totalNomina}`); // 88000 + 96000 + 75000 = 259000
