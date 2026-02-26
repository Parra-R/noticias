import React from 'react'
import './noticia1.css'

const Noticia1 = () => {
  const titulo: string = "Siete gráficos para entender las okupaciones y los desahucios en España"
  const subtitulo: string = "El Congreso rechaza la moratoria antidesahucios con el voto en contra de PP, Vox y Junts. Las estadísticas reflejan un aumento de la usurpación, aunque el impacto sigue siendo residual"
  const parrafo: string = "El Gobierno ha sufrido este jueves una nueva derrota en el Congreso al tratar de sacar adelante por segunda vez el escudo social que decayó con el decreto ómnibus. Con los anunciados votos en contra de PP, Vox y Junts"

  return (
    <article className="noticia">
      <header className="noticia__header">
        <h1 className="noticia__titulo">{titulo}</h1>
        <h2 className="noticia__subtitulo">{subtitulo}</h2>
      </header>

      <section className="noticia__contenido">
        <p className="noticia__parrafo">{parrafo}</p>
      </section>
    </article>
  )
}

export default Noticia1
