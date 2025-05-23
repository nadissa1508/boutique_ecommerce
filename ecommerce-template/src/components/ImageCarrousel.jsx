function ImageCarrousel({ images, cantStars }) {
  return (
    <div className="image-carrousel-container">
      <div className="image-carrousel-stars">
        <img src="./assets/star.png" alt="Stars" className="star" />
        <p>{cantStars}</p>  
      </div>
      <div className="image-carrousel-background">

      </div>    
      <div className="image-carrousel">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Product image ${index + 1}`}
            className="carrousel-image"
          />
        ))}
      </div>
    </div>
    
  );
}

export default ImageCarrousel;