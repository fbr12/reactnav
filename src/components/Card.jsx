import { products } from "../main";

function Card() {
  return (
    <>
      {products.map((element) => (
        <div key={element.id} className="product">
          <img src={element.image} alt={element.title}></img>
          <div className="info">
            <h2>{element.title}</h2>
            <p className="description">{element.description}</p>
            <p className="price">${element.price}</p>
          </div>
          <div className="buttons">
            <button className="recommend">{"Recommed"}</button>
            <button className="buy">{"Buy"}</button>
          </div>
        </div>
      ))}
    </>
  );
}

export { Card };
