import Header from '../components/Header';
import ProductDescription from '../components/ProductDescription';
import SpecificationContainer from '../components/SpecificationContainer';
import QuantitySelector from '../components/QuantitySelector';
import Button from '../components/Button';
import Footer from '../components/Footer';


const product = {
    product_image: "https://i.pinimg.com/236x/96/a4/17/96a417f13031ea47fe6e0f089b4f069d.jpg",
    product_name: "Product prueba",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    volume: "150 ml",
    price: 100,
    stock: 50,
    quantity: 1,
    setQuantity: () => {},
  };

const ingredients = [
  "arbol de te", 
  "cacao", 
  "manteca de cacao", 
  "aceite de coco", 
  "aceite de aguacate"
]

function setQuantity() {
  // Implement the logic to set the quantity
}

const quantity = 1;

function ProductDetail() {
  return (
    <div className="ProductDetail-page">
      <Header />
      <ProductDescription product={product} />
      <SpecificationContainer title="Ingredientes" elements={ingredients} />
      <div className="buy-section"> 
        <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
        <Button text="Añadir al carrito" onClick={setQuantity}/>
      </div>
      <Footer />
    </div>
  );
}       

export default ProductDetail;