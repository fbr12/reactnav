import "./App.css";
import { LiButton } from "./components/LiButton";
import { Card } from "./components/Card";

function App() {
  return (
    <>
      <LiButton />
      <section className="products">
        <Card />
      </section>
    </>
  );
}

export default App;
