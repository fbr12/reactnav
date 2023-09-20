import "./App.css";
import { LiButton } from "./components/LiButton/LiButton";
import { Card } from "./components/Card/Card";
import { Table } from "./components/Table/Table";

function App() {
  return (
    <>
      <LiButton />
      <section className="products">
        <Card />
      </section>
      <section className="products-table">
        <Table />
      </section>
    </>
  );
}

export default App;
