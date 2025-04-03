import React, { useEffect, useState } from "react";
import ProductTile from "../components/product-tile/ProductTile";


function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchListOfProducts() {
    setLoading(true);
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();

    if (data) {
      setLoading(false);
      setProducts(data);
    }
  }

  useEffect(() => {
    fetchListOfProducts();
  }, []);

  return (
    <>
      {loading ? (
        <div className="min-h-screen w-full flex justify-center items-center">
          loading...
        </div>
      ) : (
        <div className="min-h-[80vh] grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
          {products && products.length
            ? products.map((productItem) => (
                <ProductTile product={productItem} />
              ))
            : null}
        </div>
      )}
    </>
  );
}

export default Home;
