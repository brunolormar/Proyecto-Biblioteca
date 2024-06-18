import React from "react";
import { IChildren } from "src/interfaces/IChildren";
import { ILink } from '../../interfaces/ILinks';
import { Menu } from "src/componentes/commons/Menu";


export default function AdminLayout({children}: IChildren){
    const enlaces:ILink[] = [
        { name: 'Libros', href: '/admin/libros' },
        { name: 'Generos', href: '/admin/generos' },
        { name: 'Editoriales', href: '/admin/editoriales' },
        { name: 'Prestamos', href: '/admin/prestamos' },
        { name: 'Socios', href: '/admin/socios' },
        
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
