//carta para el detalle de un producto en el carrito
// ver si le agrego un dropdown para ver más detalles del producto abajo de la imagen

import QuantitySelector from "./QuantitySelector";


function DetailCard(props){
    const subtotal = props.price * props.quantity;
    return(
        <div className="detail-card">
            <div className="detail-card-left-section">
                <img src={props.product_image} alt="Image product ${props.product_name}" className="detail-card-image" />
                <h3 className="detail-card-name" >{props.product_name}</h3>
            </div>
            <div className="detail-card-right-section">
                <div className="detail-card-price-qty">
                    <span className="detail-card-price">${props.price.toFixed(2)}</span>
                    <QuantitySelector quantity={props.quantity} setQuantity={props.setQuantity} ></QuantitySelector>
                </div>

                 <div className="detail-card-divider"></div>

                <span>${subtotal.toFixed(2)}</span>
            </div>
        </div>
    );
}

export default DetailCard;

