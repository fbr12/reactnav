import "./SearchBar.css";
import { products } from "../../data";
import { useState } from "react";

function SearchBar() {
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (k) => {
    k.preventDefault();
    setSearchInput(k.target.value);
  };

  if (searchInput.length > 0) {
    products.filter((product) => {
      return product.title.match(searchInput);
    });
  }

  return (
    <div>
      <input
        type="search"
        placeholder="Search here"
        onChange={handleChange}
        value={searchInput}
      />

      <table>
        <tr>
          <th>Product</th>
          <th></th>
        </tr>

        {products.map((product, index) => {
          <div key={index}>
            <tr>
              <td>{product.title}</td>
              <td>{product.category}</td>
            </tr>
          </div>;
        })}
      </table>
    </div>
  );
}

export { SearchBar };
