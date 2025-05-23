import ImageCarrousel from './ImageCarrousel';

function ProductDescription({ product }) {
  return (
    <div className="product-description">
        <div className="product-details">
            <h1>{product.product_name}</h1>
            <p>{product.description}</p>
            <h2>{product.volume}</h2>
            <h2>Q{product.price}</h2>
            <h3>{product.stock} en existencias</h3>
        </div>    
        <ImageCarrousel images={product.product_image} />
    </div>
  );
}

export default ProductDescription;