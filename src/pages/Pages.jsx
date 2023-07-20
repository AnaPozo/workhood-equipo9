import React from "react"
import Home from "../components/MainPage/Home"
import TopCate from "../components/top/TopCate"
import Shop from "../components/shops/Shop"
import Wrapper from "../components/wrapper/Wrapper"

const Pages = ({ addToCart, CartItem, shopItems }) => {
  return (
    <>
      <Home CartItem={CartItem} />
      <Shop shopItems={shopItems} addToCart={addToCart} />
      <TopCate />
      <Wrapper />
    </>
  )
}

export default Pages
