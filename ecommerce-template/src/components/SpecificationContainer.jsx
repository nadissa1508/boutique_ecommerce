function SpecificationContainer({ title, elements}) {
  return (
    <div className="specification-container">
      <h1>{title}</h1>
      elements.map((element, index) = (
        <div key={index} className="specification-element">
          <h2>{element.title}</h2>
          <img src={element.image} alt={element.title} className="specification-image" />
          <p>{element.description}</p>
        </div>
      ))    
    </div>
  );
}

export default SpecificationContainer;