import React from 'react'
const Noticia2 = () => {
  const titulo: string = "La ONU exige a los talibanes que revoquen el código penal que legaliza la violencia contra las mujeres"
  const subtitulo: string = "El Alto Comisionado para los Derechos Humanos pide que se codifique el ‘apartheid’ de género como crimen contra la humanidad y se revisen los recortes en cooperación que amenazan la vida de millones de afganos"
  const parrafo: string = "Los talibanes deben dar marcha atrás en el nuevo código penal promulgado el mes pasado en Afganistán, en el que se legaliza la violencia contra las mujeres, y respetar sus obligaciones internacionales en materia de derechos humanos, ha pedido este jueves en Ginebra Volker Türk, Alto Comisionado de la ONU para los Derechos Humanos."

  return (
    <>
    <div className='max-w-200'>
      <header className=" font-serif">
        <h1 className="font-semibold ">{titulo}</h1>
        <h2 className="pt-6 text-xl font-medium">{subtitulo}</h2>
      </header>

      <section className="py-10 font-serif text-base font-normal">
        <p className="noticia__parrafo">{parrafo}</p>
      </section>

      <img className='rounded-xl' src="https://imagenes.elpais.com/resizer/v2/V3FSH2M3QZKOPCRDD56ZBOU52Q.jpg?auth=5536f58edf7aa8e8c04b161802fb7ca2fb44eaae54f419a1c69eb4b248607171&width=1200" alt="" />
    </div>
    </>
  )
}

export default Noticia2
