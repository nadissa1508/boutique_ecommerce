import emptyHeartIcon from '../assets/empty-heart-icon.png';
import eyeIcon from '../assets/eye-icon.png';

function ProductCard(props){
    return(
        <div className="product-card">
            <img src={props.product_image} alt={`Image product ${props.product_name}`} className="image-product" />
            <h3 className="product-name" >{props.product_name}</h3>
            <p className="product-price">Q{props.price}</p>
            <div className="buttons-product-card" >
                 <button className="eye-btn">
                    <img src={eyeIcon} alt="Boton de ojo" className="eye-icon" />
                </button>
                <button className="empty-heart-btn">
                    <img src={emptyHeartIcon} alt="Boton de corazon" className="empty-heart-icon" />
                </button>
            </div>
        </div>
    );
}

export default ProductCard;