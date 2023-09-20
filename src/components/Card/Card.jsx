import { products } from "../../data";
import { Button } from "@mui/material";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import "./Card.css";

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
            <div className="opinion">
              <Button className="recommend">
                <ThumbUpIcon color="success" />
              </Button>
              <Button className="dislike">
                <ThumbDownIcon color="error" />
              </Button>
            </div>
            <Button className="buy">
              <LocalMallIcon color="secondary" />
            </Button>
          </div>
        </div>
      ))}
    </>
  );
}

export { Card };
