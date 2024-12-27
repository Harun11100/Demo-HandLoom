import React from "react";
import { Card, CardItem, Carousel } from "./ui/apple-cards-carousel";
import { mockCards, products } from "@/const";


// const mockCards = [
//   {
//     src: "/product-1.jpeg",
//     title: "Card 1",
//     category: "Category 1",
//     content: <p>Details about Card 1</p>,
//   },
//   {
//     src: "/product-2.png",
//     title: "Card 2",
//     category: "Category 2",
//     content: <p>Details about Card 2</p>,
//   },
//   {
//     src: "/product-3.jpeg",
//     title: "Card 3",
//     category: "Category 3",
//     content: <p>Details about Card 3</p>,
//   },
// ];

const CarouselSlider = () => {
  const items = products.map((product,index) => (
       <CardItem key={index} product={product}/>

  ));

  return (
    <div className="h-auto bg-gray-50">
      <Carousel items={items} />
    </div>
  );
};

export default CarouselSlider;
