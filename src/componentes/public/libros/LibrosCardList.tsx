import { ILibro } from "src/interfaces/ILibros";
import React, { FC } from "react";
import { LibroCard} from "./LibroCard";

interface Props {
    libros:ILibro[];
}

export const LibrosCardList:FC<Props> = ({libros}) => {
  return (
    <section className="flex flex-row flex-wrap">
      {
        libros.map( (libro) => (
          <article key={libro.id} className="basis-1/4 p-2">
            {/* <Link key={restaurant.id} href={`/${restaurant.id}`}>
                {restaurant.name}
              </Link> */}
            <link key={ libro.id } href ={`/public/libros/${libro.id}`}>
              <LibroCard key={libro.id} libro = {libro }/>
            </link>  
          </article>
        ))
      }
    </section>
    )
  }
  
