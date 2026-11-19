interface Movimiento {
  tipo: "depósito" | "retiro";
  monto: number;
  fecha: Date;
}

class CuentaBancaria {
  readonly titular: string;
  private saldo: number;
  private historial: Movimiento[];

  constructor(titular: string, montoInicial: number) {
    if (montoInicial < 0) {
      throw new Error("El monto inicial no puede ser negativo.");
    }
    this.titular = titular;
    this.saldo = montoInicial;
    this.historial = [];
    if (montoInicial > 0) {
      this.historial.push({
        tipo: "depósito",
        monto: montoInicial,
        fecha: new Date()
      });
    }
  }

  depositar(monto: number): void {
    if (monto <= 0) {
      throw new Error("El monto a depositar debe ser mayor que 0.");
    }
    this.saldo += monto;
    this.historial.push({
      tipo: "depósito",
      monto,
      fecha: new Date()
    });
  }

  retirar(monto: number): void {
    if (monto <= 0) {
      throw new Error("El monto a retirar debe ser mayor que 0.");
    }
    if (monto > this.saldo) {
      throw new Error(`Fondos insuficientes. Intento de retiro: $${monto}, Saldo disponible: $${this.saldo}.`);
    }
    this.saldo -= monto;
    this.historial.push({
      tipo: "retiro",
      monto,
      fecha: new Date()
    });
  }

  consultarSaldo(): number {
    return this.saldo;
  }

  obtenerHistorial(): Movimiento[] {
    return this.historial.map(mov => ({ ...mov, fecha: new Date(mov.fecha) }));
  }
}

// Bloque de prueba
console.log("--- Pruebas Ejercicio 2 ---");
const cuenta = new CuentaBancaria("Gonzalo Rodríguez", 5000);
console.log("Titular de la cuenta:", cuenta.titular);
console.log("Saldo inicial:", cuenta.consultarSaldo());

console.log("Depositando $2500...");
cuenta.depositar(2500);
console.log("Saldo después del depósito:", cuenta.consultarSaldo());

console.log("Retirando $3000...");
cuenta.retirar(3000);
console.log("Saldo después del retiro:", cuenta.consultarSaldo());

console.log("Historial de movimientos:");
console.log(cuenta.obtenerHistorial());

// Intentar modificar el historial retornado
console.log("Intentando alterar externamente el historial obtenido...");
const histModificado = cuenta.obtenerHistorial();
if (histModificado[0]) {
  histModificado[0].monto = 9999999;
}
console.log("Historial real de la cuenta después del intento de modificación externa:");
console.log(cuenta.obtenerHistorial()); // El valor original de $5000 permanece intacto.

try {
  console.log("Intentando depositar un monto negativo (-100)...");
  cuenta.depositar(-100);
} catch (e: any) {
  console.log("Capturado esperado depósito inválido:", e.message);
}

try {
  console.log("Intentando retirar un monto mayor al saldo ($10000)...");
  cuenta.retirar(10000);
} catch (e: any) {
  console.log("Capturado esperado retiro inválido:", e.message);
}
