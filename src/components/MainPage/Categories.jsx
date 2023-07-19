import React from "react"

const Categories = () => {
  const data = [
    {
      cateImg: "./images/category/cat13.png",
      cateName: "Health & Care",
    },
    {
      cateImg: "./images/category/cat12.png",
      cateName: "Mantenimiento",
    },
    {
      cateImg: "./images/category/cat8.png",
      cateName: "Animales",
    },
    {
      cateImg: "./images/category/cat10.png",
      cateName: "Alimentación",
    },
    {
      cateImg: "./images/category/cat1.png",
      cateName: "Ropa",
    },
    {
      cateImg: "./images/category/cat4.png",
      cateName: "Juguetes",
    },
    {
      cateImg: "./images/category/cat11.png",
      cateName: "Libros",
    },
    {
      cateImg: "./images/category/cat2.png",
      cateName: "Electrónica",
    },
    {
      cateImg: "./images/category/cat3.png",
      cateName: "Viajes",
    },
    {
      cateImg: "./images/category/cat5.png",
      cateName: "Clases particulares",
    },


  ]

  return (
    <>
      <div className='category'>
        {data.map((value, index) => {
          return (
            <div className='box f_flex' key={index}>
              <img src={value.cateImg} alt='' />
              <span>{value.cateName}</span>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Categories
