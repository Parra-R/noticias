import React from 'react'
const Noticia3 = () => {
  const titulo: string = "La ONU exige a los talibanes que revoquen el código penal que legaliza la violencia contra las mujeres"
  const subtitulo: string = "Esta supuesta subcultura, acogida con entusiasmo por los medios, desata odio en las redes a partir de bulos y exageraciones que ponen a las personas trans en el disparadero, como ha ocurrido antes en Argentina y México"
  const parrafo: string = "Más de una semana lleva hablándose de los therians en España. Pero, ¿dónde están en realidad los famosos therians? Webs y programas de televisión, entusiasmados con la rareza, han difundido por decenas imágenes en TikTok e Instagram de presuntos miembros de esta subcultura marginal, que supuestamente se sienten identificados con alguna especie animal. Pero por las plazas donde iban a aparecer el fin de semana, atraídos por convocatorias de origen difuso amplificadas por los medios, apenas lo han hecho. Periodistas y curiosos, bastantes. Therians, pocos. Lo que sí ha aparecido son elementos que ya fueron protagonistas del mismo fenómeno en América: el pánico moral —la reacción exagerada ante un comportamiento de un determinado grupo, presentado como una amenaza—, los bulos y la manipulación ultraderechista para alimentar el discurso de una supuesta decadencia moral de la sociedad, con la diversidad en el punto de mira."

  return (
    <>
    <div className='max-w-300'>
      <header className="font-serif">
        <h1 className="font-semibold text-orange-900">{titulo}</h1>
        <h2 className="pt-6 text-xl font-medium text-orange-700">{subtitulo}</h2>
      </header>

      <section className="py-10 font-serif text-base font-normal">
        <p className="noticia__parrafo">{parrafo}</p>
      </section>

      <img className='rounded-xl' src="https://imagenes.elpais.com/resizer/v2/TGRQK77LSVDRRP6XO2G4N2D54M.jpg?auth=aee39585e8975de08504701d791b4073c021d3e653b70e383e9a24a895316baf&width=1200&height=675&smart=true" alt="" />
    </div>
    </>
  )
}

export default Noticia3