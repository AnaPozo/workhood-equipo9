import React from "react"

const Head = () => {
  return (
    <>
      <section className='head'>
        <div className='container d_flex'>
          <div className='left row'>
            <i className='fa fa-phone'></i>
            <label> +34 123456789</label>
            <i className='fa fa-envelope'></i>
            <label> support@workhood.com</label>
          </div>
          <div className='right row RText'>
            <label>Work Hood FAQs</label>
            <label>Necesitas Ayuda?</label>
            
          </div>
        </div>
      </section>
    </>
  )
}

export default Head
