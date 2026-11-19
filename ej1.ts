interface Equipo {
    nombre: string;
    tipo: string;
    estado: string;
}

class Inventario {
    private static instancia: Inventario;

    private equipos: Equipo[];

    private constructor() {
        this.equipos = [];
    }

    public static obtenerInstancia(): Inventario {
        if (!Inventario.instancia) {
            Inventario.instancia = new Inventario();
        }
        return Inventario.instancia;
    }

    public agregarEquipo(nombre: string, tipo: string, estado: string): void {
        this.equipos.push({ nombre, tipo, estado });
    }

    public listarEquipos(): Equipo[] {
        return this.equipos;
    }
}

const inventario = Inventario.obtenerInstancia();
inventario.agregarEquipo("Notebook HP", "Portátil", "disponible");
console.log(inventario.listarEquipos());
// [{ nombre: "Notebook HP", tipo: "Portátil", estado: "disponible" }]

export { };
