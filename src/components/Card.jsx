import { products } from "../main";
import { likeSvg } from "./Likesvg";
import { Button } from "@mui/material";
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
function Card() {
    const likeSvg=
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
            <button className="recommend">{"Recommend"}</button>
            <div className="opinion">
              <Button variant="contained" endIcon={<ThumbDownIcon />}>
                Dislike
              </Button>
              <button className="dislike">{"Dislike"}</button>
            </div>
            <button className="buy">{"Buy"}</button>
          </div>
        </div>
      ))}
    </>
  );
}

export { Card };
