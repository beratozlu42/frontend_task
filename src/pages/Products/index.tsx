import { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard"
import styles from './index.module.css'; //For the FadeIn animation I used custom css.
import { useLocation } from 'react-router-dom';

interface Product {
  brand: string;
  product_id: string;
  product_name: string;
  category: string;
  price_info: {
    price: number;
    discounted_price: number;
  };
  image_url_list: string[];
  review_and_rating: {
    average_rating: number;
  }
}

export default function Products() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const search = params.get('search') || '';

  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // If user searchs from another page it will go back to page 1 to give the results.
  useEffect(() => {
    setPage(1);
  }, [search]);

  /* This was the old api I was using. Current api does the search in backend.
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFiltered(data);
      });
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const result = products.filter((p) =>
        p.title.toLowerCase().includes(search.toLowerCase())
      );
      setFiltered(result);
    }, 400);
    return () => clearTimeout(timeout);
  }, [search, products]);
  */

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(true);
      fetch(`https://api.case.beratozlu.com.tr/products?search=${search}&page=${page}&limit=15`)
        .then((res) => res.json())
        .then((data) => {
          setProducts(data.data);
          setTotalPages(data.totalPages);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        })
        .catch((err) => console.error(err))
        .finally(() => setLoading(false));
    }, 400);
    return () => clearTimeout(timeout);
  }, [search, page]);

  const handlePrev = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleNext = () => {
    if (page < totalPages) setPage(page + 1);
  };

  return (
    <div className={`${styles.section} flex-1 p-6`}>
      <div className="p-6 max-w-5xl mx-auto">
        <h1 className="text-3xl text-[#470808] text-left font-bold">Products</h1>
        <hr className="mb-6 border-gray-300" />

        {/* Moved to header */}
        {/*<input
          type="text"
          placeholder="Search..."
          className="w-full p-3 mb-6 border rounded-lg focus:outline focus:ring-red-200"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1);
          }}
        />*/}

        {products?.length === 0 && search.trim() !== "" && (
          <p className="text-center text-xl text-gray-500">
            No matching products found.
          </p>
        )}

        {loading ? (
          <p className="text-center text-xl py-10 animate-pulse text-gray-500">
            Loading...
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {products?.map((product) => (
              <ProductCard key={product.product_id} product={product} />
            ))}
          </div>
        )}

        {products?.length !== 0 && (
          <div className="flex justify-center items-center mt-6 space-x-4">
            <button
              onClick={handlePrev}
              disabled={page === 1}
              className="md:px-4 md:py-2 px-2 py-1 border rounded disabled:opacity-50"
            >
              Prev
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
              <button
                key={num}
                onClick={() => setPage(num)}
                className={`px-2 py-1 md:px-3 md:py-2 border rounded ${page === num ? "bg-red-500 text-white" : "bg-white"}`}
              >
                {num}
              </button>
            ))}

            <button
              onClick={handleNext}
              disabled={page === totalPages}
              className="md:px-4 md:py-2 px-2 py-1 border rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
