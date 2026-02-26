import React from 'react'
import './Tarjeta.css'

interface TarjetaProps{
    title:string;
    priority:'urgent' | 'normal'
}
const Tarjeta = (props:TarjetaProps) => {
    const classPriority = props.priority === 'urgent' ? 'urgent' : 'normal'
  return (
    <div className={`card ${classPriority}`}>
        <h3>{props.title}</h3>
        <p>Level of priority: {props.priority}</p>
    </div>
  )
}

export default Tarjeta