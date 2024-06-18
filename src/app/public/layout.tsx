import React from "react";
import { IChildren } from "src/interfaces/IChildren";
import { Menu } from "src/componentes/commons/Menu";
import { ILink } from '../../interfaces/ILinks';


export default function PublicLayout({children}: IChildren){
    //peticion la BD <-- LINKS DEL FRONTEND
    const enlaces:ILink[] = [
        { name: 'Libros', href: '/public/libros' },
        { name: 'Generos', href: '/public/generos' },
        { name: 'Editoriales', href: '/public/editoriales' },
        { name: 'Nuestras Bibliotecas', href: '/public/bibliotecas' },
    ]
    return (
        <>
            <header>
                <Menu links = {enlaces} />

            </header>
            <main>
                { children }
            </main>   
        </>
    );
  }

