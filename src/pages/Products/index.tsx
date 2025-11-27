import { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard";

interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
}

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState<Product[]>([]);

  // Fetch products
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFiltered(data);
      });
  }, []);

  // Debounce search
  useEffect(() => {
    const timeout = setTimeout(() => {
      const result = products.filter((p) =>
        p.title.toLowerCase().includes(search.toLowerCase())
      );
      setFiltered(result);
    }, 400);

    return () => clearTimeout(timeout);
  }, [search, products]);

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Products</h1>

      <input
        type="text"
        placeholder="Search..."
        className="w-full p-3 mb-6 border rounded-lg"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
