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
          <img
            className="img-table"
            src={element.image}
            alt={element.title}
          ></img>
          <div className="info-table">
            <p className="title-table">{element.title}</p>
            <p className="description-table">{element.description}</p>
          </div>
          <div className="buttons-table">
            <p className="price-table">${element.price}</p>
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
