import Header from '../components/Header';
import ProductCart from '../components/ProductCart';
import Button from '../components/Button';
import Footer from '../components/Footer';

const products = [
  {
    product_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc1yhbYKc06NZ-HSGmRtr-FYY41PW1QC4YvQ&s",
    product_name: "Product 1",
    price: 10,
    quantity: 1,
    setQuantity: () => {},
  },
  {
    product_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc1yhbYKc06NZ-HSGmRtr-FYY41PW1QC4YvQ&s",
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
      <Button text="Vaciar carrito"/>
      <ProductCart products={products} />
      <Button text="Pagar pedido"/>
      <Footer />
    </div>
  );
}

export default Cart;