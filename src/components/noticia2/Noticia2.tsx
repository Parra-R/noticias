import React from 'react'

interface Paper {
  titulo: string;
  subtitulo: string;
  parrafo: string;
  img:string;
}

const Noticia2 = (props:Paper) => {

  return (
    <>
    <div className='py-10 max-w-300'>
      <header className=" font-serif">
        <h1 className="font-semibold ">{props.titulo}</h1>
        <h2 className="pt-6 text-xl font-medium">{props.subtitulo}</h2>
      </header>

      <section className="py-10 font-serif text-base font-normal">
        <p className="noticia__parrafo">{props.parrafo}</p>
      </section>

      <img className='rounded-xl' src={props.img} alt="" />
    </div>
    </>
  )
}

export default Noticia2
