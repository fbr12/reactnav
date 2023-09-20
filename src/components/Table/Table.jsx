import { products } from "../../data";
import { Button } from "@mui/material";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { useState } from "react";
import "./Table.css";

function Table() {
  return (
    <>
      {products.map((element) => (
        <div key={element.id} className="product-table">
          <img src={element.image} alt={element.title}></img>
          <div className="info">
            <p className="title">{element.title}</p>
            <p className="description-table">{element.description}</p>
            <p className="price-table">${element.price}</p>
          </div>
          <div className="buttons-table">
            <Button>
              <LocalMallIcon color="success" />
            </Button>
          </div>
        </div>
      ))}
    </>
  );
}
export { Table };
