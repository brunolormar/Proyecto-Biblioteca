import { Libro } from "src/modulos/libros/entities/libro.entity";
import { Column, JoinColumn, OneToMany, PrimaryColumn } from "typeorm";

export class Autore {

    @PrimaryColumn('text', { unique: true})
    codigo_de_autor: string;

    @Column('text')
    nombre: string;

    @OneToMany(
        () => Libro,
        (libro) => libro.autor,
    )
    libros: Libro


}
