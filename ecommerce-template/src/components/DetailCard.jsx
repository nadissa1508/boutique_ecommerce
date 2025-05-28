//carta para el detalle de un producto en el carrito
// ver si le agrego un dropdown para ver más detalles del producto abajo de la imagen

import QuantitySelector from "./QuantitySelector";


function DetailCard(props){
    const subtotal = props.price * props.quantity;
    return(
        <>
            <div className="grid-item product-info">
              <img src={props.product_image} alt={props.product_name} className="product-image" />
              <span>{props.product_name}</span>
            </div>
            <div className="grid-item">{props.price}</div>
            <div className="grid-item">
              <div className="quantity-selector">
                <button onClick={() => props.setQuantity(props.quantity - 1)}>-</button>
                <input type="number" value={props.quantity} readOnly />
                <button onClick={() => props.setQuantity(props.quantity + 1)}>+</button>
              </div>
            </div>
            <div className="grid-item">{props.price * props.quantity}</div>
        </>
    );
}

export default DetailCard;

