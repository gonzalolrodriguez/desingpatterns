class Persona {
  private readonly dni: string;
  public nombre: string;
  private _edad!: number;
  private _email!: string;

  constructor(dni: string, nombre: string, edadInicial: number, emailInicial: string) {
    this.dni = dni;
    this.nombre = nombre;
    this.edad = edadInicial;
    this.email = emailInicial;
  }

  get edad(): number {
    return this._edad;
  }

  set edad(valor: number) {
    if (valor < 0 || valor > 120) {
      throw new Error(`Edad inválida: ${valor}. Debe estar en el rango de 0 a 120.`);
    }
    this._edad = valor;
  }

  get email(): string {
    return this._email;
  }

  set email(valor: string) {
    if (!valor.includes("@")) {
      throw new Error(`Email inválido: '${valor}'. Debe contener el carácter '@'.`);
    }
    this._email = valor;
  }

  get esMayorDeEdad(): boolean {
    return this.edad >= 18;
  }

  get datosPublicos(): string {
    return `Nombre: ${this.nombre}, Mayor de edad: ${this.esMayorDeEdad}`;
  }
}

// Bloque de prueba
console.log("--- Pruebas Ejercicio 5 ---");
const pers = new Persona("12345678A", "Lionel Messi", 39, "lio@messi.com");

console.log("Datos iniciales de Persona:");
console.log("Edad:", pers.edad);
console.log("Email:", pers.email);
console.log("¿Es mayor de edad?:", pers.esMayorDeEdad);
console.log("Datos Públicos:", pers.datosPublicos);

console.log("\nModificando edad a 17...");
pers.edad = 17;
console.log("¿Es mayor de edad?:", pers.esMayorDeEdad);
console.log("Datos Públicos actualizados:", pers.datosPublicos);

console.log("\nModificando email...");
pers.email = "messi10@barcelona.com";
console.log("Email actualizado:", pers.email);

try {
  console.log("\nIntentando asignar edad inválida (-5)...");
  pers.edad = -5;
} catch (e: any) {
  console.log("Capturado esperado edad negativa:", e.message);
}

try {
  console.log("Intentando asignar edad inválida (130)...");
  pers.edad = 130;
} catch (e: any) {
  console.log("Capturado esperado edad excesiva:", e.message);
}

try {
  console.log("Intentando asignar email inválido (sin arroba)...");
  pers.email = "messi10.com";
} catch (e: any) {
  console.log("Capturado esperado email inválido:", e.message);
}
