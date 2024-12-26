// pages/products.js

import CardItem from "./CardItem";

//Temporary data

const products = [
  {
    code: "Code: S-401",
    name: "Premium Pedding Jacket for Men's",
    originalPrice: "2,080.00৳",
    discountPrice: "1,480.00৳",
    image: "/product-1.jpeg",
  },
  {
    code: "Code: S-403 (Diamond Orange)",
    name: "Premium Padding Jacket for Men's",
    originalPrice: "2,080.00৳",
    discountPrice: "1,480.00৳",
    image: "/product-2.png",
  },
  {
      code: "Code: S-501",
      name: "Premium Pedding Jacket for Men's",
      originalPrice: "2,080.00৳",
      discountPrice: "1,480.00৳",
      image: "/product-1.jpeg",
    },
    {
      code: "Code: S-603 (Diamond Orange)",
      name: "Premium Padding Jacket for Men's",
      originalPrice: "2,080.00৳",
      discountPrice: "1,480.00৳",
      image: "/product-3.jpeg",
    },
    {
      code: "Code: S-401",
      name: "Premium Pedding Jacket for Men's",
      originalPrice: "2,080.00৳",
      discountPrice: "1,480.00৳",
      image: "/product-1.jpeg",
    },
    {
      code: "Code: S-403 (Diamond Orange)",
      name: "Premium Padding Jacket for Men's",
      originalPrice: "2,080.00৳",
      discountPrice: "1,480.00৳",
      image: "/product-2.png",
    },
    {
        code: "Code: S-501",
        name: "Premium Pedding Jacket for Men's",
        originalPrice: "2,080.00৳",
        discountPrice: "1,480.00৳",
        image: "/product-1.jpeg",
      },
      {
        code: "Code: S-603 (Diamond Orange)",
        name: "Premium Padding Jacket for Men's",
        originalPrice: "2,080.00৳",
        discountPrice: "1,480.00৳",
        image: "/product-3.jpeg",
      },
];

const Products = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <CardItem key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
