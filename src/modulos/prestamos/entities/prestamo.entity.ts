import { Libro } from "src/modulos/libros/entities/libro.entity";
import { Socio } from "src/modulos/socios/entities/socio.entity";
import { Column, JoinColumn, ManyToOne} from "typeorm";

export class Prestamo {

    @Column({ name: 'id_libro'})
    libro_id: number;

    @Column({ name: 'id_socio'})
    socio_id: number;

    @Column('text')
    fecha_del_prestamo: string;

    @Column('text')
    fecha_limite_a_devolver: string;

    @Column('text')
    estado_del_prestamo: string;

    @ManyToOne(
        () => Libro,
        (libro) => libro.prestamosLibro,
        {cascade: true}
    )
    @JoinColumn({ name: 'id_libro' })
    libro: Libro

    @ManyToOne(
        () => Socio,
        (socio) => socio.prestamosSocio,
        {cascade: true}
    )
    @JoinColumn({ name: 'id_socio' })
    socio: Socio
}
