import { products } from "../main";
function LiButton() {
  products.forEach((element) => {
    let catArray = [];
    if (!(element.category in catArray)) {
      catArray = catArray.push(element.category);
    }
  });
  return (
    <>
    {
        products.map(element=>(
                <button key={element.id} className="item">{element.category}</button>
        ))
    }
    </>
  );
}

export { LiButton };
