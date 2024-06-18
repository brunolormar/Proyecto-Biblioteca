import React from 'react'
import { LibroDetail } from 'src/componentes/public/libros/LibroDetail';
import apiLibros from 'src/model/libros/apiLibros';

const LibroPage = async ({params: {id}}: {params: {id:string}}) => {
    
  const libro = await apiLibros.detalle(+id);

    console.log("------------")
    console.log(libro)
  return (
    <section className="container mx-auto px-4 mt-6 border min-h-screen">
      <LibroDetail libro={libro} />
    </section>
  )
}

export default LibroPage
