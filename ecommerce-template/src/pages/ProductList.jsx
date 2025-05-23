import Header from '../components/Header';
import HeroBanner from '../components/HeroBanner';
import ProductCard from '../components/ProductCard';
import FavProductCard from '../components/FavProductCard';
import Footer from '../components/Footer';

const products = [
  {
    id: 1,
    product_image: "https://i.pinimg.com/236x/96/a4/17/96a417f13031ea47fe6e0f089b4f069d.jpg",
    product_name: "Product prueba 1",
    price: 100,
  },
  {
    id: 2,
    product_image: "https://i.pinimg.com/236x/96/a4/17/96a417f13031ea47fe6e0f089b4f069d.jpg",
    product_name: "Product prueba 2",
    price: 150,
  },
  {
    id: 3,
    product_image: "https://i.pinimg.com/236x/96/a4/17/96a417f13031ea47fe6e0f089b4f069d.jpg",
    product_name: "Product prueba 3",
    price: 200,
  },
  {
    id: 4,
    product_image: "https://i.pinimg.com/236x/96/a4/17/96a417f13031ea47fe6e0f089b4f069d.jpg",
    product_name: "Product prueba 4",
    price: 100,
  },
  {
    id: 5,
    product_image: "https://i.pinimg.com/236x/96/a4/17/96a417f13031ea47fe6e0f089b4f069d.jpg",
    product_name: "Product prueba 5",
    price: 300,
  },
  {
    id: 6,
    product_image: "https://i.pinimg.com/236x/96/a4/17/96a417f13031ea47fe6e0f089b4f069d.jpg",
    product_name: "Product prueba 6",
    price: 400,
  },
  {
    id: 7,
    product_image: "https://i.pinimg.com/236x/96/a4/17/96a417f13031ea47fe6e0f089b4f069d.jpg",
    product_name: "Product prueba 7",
    price: 500,
  },
  {
    id: 8,
    product_image: "https://i.pinimg.com/236x/96/a4/17/96a417f13031ea47fe6e0f089b4f069d.jpg",
    product_name: "Product prueba 8",
    price: 600,
  },
]

function ProductList() {
  return (
    <div className="ProductList-page">
      <Header />
      <HeroBanner />
      <div className="card-products">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            product_image={product.product_image}
            product_name={product.product_name}
            price={product.price}
          />
        ))}
      </div>
      <div className="card-products">
        <FavProductCard title="Favoritos" products={products} />
        <FavProductCard title="Recomendados" products={products} />
      </div>  
      <Footer />
    </div>
  );
}   

export default ProductList;