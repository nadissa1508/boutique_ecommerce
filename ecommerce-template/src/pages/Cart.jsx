import Header from '../components/Header';
import ProductCart from '../components/ProductCart';
import Button from '../components/Button';
import Footer from '../components/Footer';

const products = [
  {
    product_image: "https://i.pinimg.com/236x/96/a4/17/96a417f13031ea47fe6e0f089b4f069d.jpg",
    product_name: "Product 1",
    price: 10,
    quantity: 1,
    setQuantity: () => {},
  },
  {
    product_image: "https://i.pinimg.com/236x/96/a4/17/96a417f13031ea47fe6e0f089b4f069d.jpg",
    product_name: "Product 2",
    price: 20,
    quantity: 2,
    setQuantity: () => {},
  },
];

function Cart() {
  return (
    <div className="Cart-page">
      <Header />
      <div className="button-container-cart">
        <Button text="Vaciar carrito"/>
      </div>
      <div className="cart-background">    
        <ProductCart products={products} />
      </div>
      <div className="button-container-cart">
        <Button text="Pagar pedido"/>
      </div>
      <Footer />
    </div>
  );
}

export default Cart;