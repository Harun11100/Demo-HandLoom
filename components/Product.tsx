'use client';

import { useEffect, useState } from "react";
import CardItem from "./CardItem";

const Products = ({ products }) => {

  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    if (!products || products.length === 0) return;

    const formattedProducts = products.map((item) => ({
      image: item.images[0].src,
      name: item.name,
      code: item.sku|| "N/A",
      originalPrice: `${item.regular_price} ৳`,
      discountPrice: `${item.sale_price} ৳`,
    }));
    setProductsList(formattedProducts);
  }, [products]);


  return (
    <div className="container mb-20 mx-auto py-8">
      <h1 className="text-2xl text-gray-700 font-bold mb-6">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"> 
        {productsList.map((product, index) => (
          <CardItem key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
