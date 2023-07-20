import React from "react"
import "./style.css"

const Wrapper = () => {
  const data = [
    {
      cover: <i class="fa-solid fa-city"></i>,
      title: "En tu zona",
      decs: "Alguien en tu zona ofrece el servicio que necesitas, sin necesidad de desplazarse muy lejos, ni para ti ni para quien lo ofrece.",
    },
    {
      cover: <i class="fa-solid fa-credit-card"></i>,
      title: "Variedad de precios",
      decs: "Cada trabajador publica sus propios precios, segun las necesidades cubiertas.",
    },
    {
      cover: <i class="fa-solid fa-handshake"></i>,
      title: "De confianza",
      decs: "Los propios usuarios pueden corroborar que los servicios son de fiar y de calidad.",
    },
    {
      cover:<i class="fa-solid fa-clock"></i>,
      title: "posibilidad de servicio a cualquier hora del dia",
      decs: "Un trabajador podria estar disponible a la hora que te haga falta.",
    },
  ]
  return (
    <>
      <section className='wrapper background'>
        <div className='container grid2'>
          {data.map((val, index) => {
            return (
              <div className='product' key={index}>
                <div className='img icon-circle'>
                  <i>{val.cover}</i>
                </div>
                <h3>{val.title}</h3>
                <p>{val.decs}</p>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Wrapper
