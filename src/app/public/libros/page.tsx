import React from "react";
import { Tabla } from "src/componentes/commons/Tabla";
import DataGrid from "src/componentes/public/libros/DataGrid/DataGrid";
import { LibrosCardList } from "src/componentes/public/libros/LibrosCardList";
import ColumLibro, { ILibro } from "src/interfaces/ILibros";
import { getLibros } from "src/model/libros/datalibro";

const LibrosPage = async () => {

  const libros: ILibro[] = await getLibros()
  return (
    <section className='flex flex-col items-center'>
      <h2 className='text-4xl m-8'>Sección de Libros</h2>
      {/*<Tabla
        rows={libros}
        columns={ColumLibro}
        key='isbn' />*/}
  
      <LibrosCardList libros={libros} />      
      {/*<DataGrid libros={libros} columns={ColumLibro} />*/}
    </section>
  )
}
  
export default LibrosPage
  
  

