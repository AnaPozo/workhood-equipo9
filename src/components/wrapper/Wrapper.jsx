import React from "react"
import "./style.css"

const Wrapper = () => {
  const data = [
    {
      cover: <i class="fa-solid fa-city"></i>,
      title: "En tu zona",
      decs: "En tu zona, alguien ofrece el servicio que necesitas, sin necesidad de desplazarte largas distancias, ni tu ni quien le ofrece el servicio.",
    },
    {
      cover: <i class="fa-solid fa-credit-card"></i>,
      title: "Variedad de métodos de pago",
      decs: "Cada persona publica sus propios precios o acuerda intercambiar algún servicio contigo. Dependerá del acuerdo al que lleguéis ambas partes.",
    },
    {
      cover: <i class="fa-solid fa-handshake"></i>,
      title: "De proximidad y confianza",
      decs: "Los propios usuarios pueden corroborar que los servicios son de confianza gracias a sus opiniones y feedbacks.",
    },
    {
      cover:<i class="fa-solid fa-clock"></i>,
      title: "Servicios que se ajustan a tu tiempo y disponibilidad",
      decs: "Los servicios podrán estar disponibles a la hora que acuerdes con la persona lo oferte según la disponibiliad de ambos.",
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
