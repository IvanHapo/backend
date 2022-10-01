class Usuario {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = [];
        this.mascotas = [];
    }
    getFullName() {
        return `Nombre Completo: ${this.nombre} ${this.apellido}`;
    }
    addMascota(nombre, tipo) {
        let mascota = {};
        mascota.nombre = nombre;
        mascota.tipo = tipo;
        this.mascotas.push(mascota);
    }
    countMascotas() {
        this.cantidadDeMascotas = this.mascotas.length;

    }
    addBook(nombre, autor) {
        let libro = {};
        libro.nombre = nombre;
        libro.autor = autor;
        this.libros.push(libro);

    }
    getBooksName() {
        const nombresLibros = [];

        this.libros.forEach(libro => {
            nombresLibros.push(libro.nombre)
        })

        return nombresLibros;

    }

}

let usuario = new Usuario('Marcos', 'Gomez');
let nombreCompleto = usuario.getFullName();

usuario.addMascota('Firulai', 'Perro');
usuario.countMascotas();
usuario.addBook('Steve Jobs', 'Walter Isaacson');
usuario.getBooksName();



console.log(usuario, nombreCompleto);
console.log(usuario.getBooksName());