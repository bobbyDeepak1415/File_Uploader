import { useState } from "react";

export default function Demo() {
  const products = [
    { id: 1, name: "MacBook Pro" },
    { id: 2, name: "iPhone 15" },
    { id: 3, name: "Samsung Galaxy" },
    { id: 4, name: "Dell XPS" },
    { id: 5, name: "HP Pavilion" },
    { id: 6, name: "iPad Air" },
    { id: 7, name: "Sony Headphones" },
    { id: 8, name: "Apple Watch" },
    { id: 9, name: "Google Pixel" },
    { id: 10, name: "Asus ROG" },
    { id: 11, name: "Lenovo ThinkPad" },
    { id: 12, name: "AirPods Pro" },
    { id: 13, name: "Microsoft Surface" },
    { id: 14, name: "OnePlus Nord" },
    { id: 15, name: "Canon Camera" },
  ];

  const [query, setQuery] = useState("");

  // DERIVED STATE: Filter the original list every time 'query' changes
  // We use .toLowerCase() to make the search case-insensitive
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <div style={{ padding: "20px" }}>
      <label>Search Products: </label>
      <input
        style={{ border: "1px solid", padding: "5px" }}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Type to search..."
      />

      <hr />

      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <ul key={product.id}>
            <li>{product.name}</li>
          </ul>
        ))
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
}
