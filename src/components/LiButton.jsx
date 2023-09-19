import { products } from "../main";
function arrayIt() {
  let catArray = [];
  console.log(catArray);
  products.forEach((element) => {
    if (!catArray.includes(element.category)) {
      catArray.push(element.category);
    }
  });
  return catArray;
}

function LiButton() {
  let catArray = arrayIt();
  return (
    <ul>
      {catArray.map((element) => (
        <li key={element} className="item">
          {element}
        </li>
      ))}
    </ul>
  );
}

export { LiButton };
