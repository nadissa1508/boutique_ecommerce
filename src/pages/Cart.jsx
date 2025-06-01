import Header from '../components/Header'
import ProductCart from '../components/ProductCart'
import Button from '../components/Button'
import Footer from '../components/Footer'
import { CartContext } from '../context/CartContext' 
import { useContext, useRef, useMemo, useEffect } from 'react'

function Cart() {
  const { cart, clearCart } = useContext(CartContext)

  const topRef = useRef(null)

  useEffect(() => {
    topRef.current?.scrollIntoView({ behavior: 'instant' })
  }, [])

  const total = useMemo(() => {
    return cart.reduce((acc, item) => {
      const actualPrice = item.discount ? item.price - item.discount : item.price
      return acc + actualPrice * item.quantity
    }, 0)
  }, [cart])

  const handlePayment = () => {
    if (total > 999.99) { alert("ERROR: El total excede los $999.99") } else { alert("Pago procesado correctamente") }
  }

  return (
    <div className="Cart-page">
      <Header />
      <div className="button-container-cart">
        <Button text="Vaciar carrito" onClick={() => {
          clearCart()
        }} />
      </div>
      <div className="cart-background"> 
        {
          cart.length > 0
          ? <ProductCart products={cart} />
          : <p>Tu carrito está vacío. ¡Comienza a agregar productos!</p>
        }   
      </div>
      <div className="button-container-cart">
        <Button text="Pagar pedido" onClick = {handlePayment} />
      </div>
      <Footer />
    </div>
  )
}

export default Cart