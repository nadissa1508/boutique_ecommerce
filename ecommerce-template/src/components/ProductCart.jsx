import DetailCard from "./DetailCard";

function ProductCart({ products }) {
  return (
    <div className="product-cart">
      <div className="cart-grid">
        <div className="grid-header">Producto</div>
        <div className="grid-header">Precio</div>
        <div className="grid-header">Cantidad</div>
        <div className="grid-header">Subtotal</div>

        {products.map((product, index) => (
           <DetailCard
              key={index}
              product_image={product.product_image}
              product_name={product.product_name}
              price={product.price}
              quantity={product.quantity}
              setQuantity={product.setQuantity}
            />
        ))}
      </div>
      
      <div className="cart-divider"></div>
      <div className="total-cart">
        <h1>Total</h1>
        <h1 className="total-cart-variable">Q50.00</h1>
      </div>
    </div>
  );
}

export default ProductCart;