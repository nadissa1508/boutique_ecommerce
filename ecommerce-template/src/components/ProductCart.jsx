import DetailCard from "./DetailCard";

function ProductCart({ products }) {
  return (
    <div className="product-cart">
        products.map((product, index) = (
            <DetailCard
            key={index}
            product_image={product.product_image}
            product_name={product.product_name}
            price={product.price}
            quantity={product.quantity}
            setQuantity={product.setQuantity}
            />
        ))
        <h1>Total</h1>
        <h1>Q30.00</h1>
    </div>
  );
}

export default ProductCart;