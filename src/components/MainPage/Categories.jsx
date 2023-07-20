import React from "react"
import { Link } from "react-router-dom"

const Categories = () => {
  const data = [
    {
      cateId: "all",
      cateImg: "./images/category/globe-solid.svg",
      cateName: "Todas las categorías",
    },
    {
      cateId: "health",
      cateImg: "./images/category/cat13.png",
      cateName: "Health & Care",
    },
    {
      cateId: "mantenimiento",
      cateImg: "./images/category/cat12.png",
      cateName: "Mantenimiento",
    },
    {
      cateId: "animales",
      cateImg: "./images/category/cat8.png",
      cateName: "Animales",
    },
    {
      cateId: "alimentacion",
      cateImg: "./images/category/cat10.png",
      cateName: "Alimentación",
    },
    {
      cateId: "ropa",
      cateImg: "./images/category/cat1.png",
      cateName: "Ropa",
    },
    {
      cateId: "juguetes",
      cateImg: "./images/category/cat4.png",
      cateName: "Juguetes",
    },
    {
      cateId: "libros",
      cateImg: "./images/category/cat11.png",
      cateName: "Libros",
    },
    {
      cateId: "electronica",
      cateImg: "./images/category/cat2.png",
      cateName: "Electrónica",
    },
    {cateId: "viajes",
      cateImg: "./images/category/cat3.png",
      cateName: "Viajes",
    },
    {cateId: "clases",
      cateImg: "./images/category/clases particulares 1.png",
      cateName: "Clases particulares",
    },



  ]

  return (
    <>
      <div className='category'>
        {data.map((value, index) => {
          return (
          
            <div className='box f_flex' key={index}>
              <img id="img-categories"src={value.cateImg} alt='' />
             <span>{value.cateName}</span>
            </div>

          )
        })}
      </div>
    </>
  )
}

export default Categories
