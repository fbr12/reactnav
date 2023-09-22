import "./App.css";
import "./components/Card/Card.css";
import "./components/Table/Table.css";
import { LiButton } from "./components/LiButton/LiButton";
import { Card } from "./components/Card/Card";
import { Table } from "./components/Table/Table";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { useState } from "react";
import { ViewCard } from "./components/Card/ViewCard";
import { ViewTable } from "./components/Table/ViewTable";
import TableRowsIcon from "@mui/icons-material/TableRows";

function App() {
  const [viewCard, setViewCard] = useState(true);
  const handleOnClick = () => {
    viewCard ? setViewCard(false) : setViewCard(true);
  };
  return (
    <>
      <LiButton />
      <button
        className="view"
        onClick={() => {
          handleOnClick();
        }}
      >
        Change View
        <TableRowsIcon />
      </button>
      {viewCard ? (
        <section className="products">
          <Card />
        </section>
      ) : (
        <section className="products-table">
          <Table />
        </section>
      )}
    </>
  );
}

export default App;
