
'use client';

import React from "react";
import { CardItem, Carousel } from "./ui/apple-cards-carousel";

const CarouselSlider = ({products}) => {

  const items = products.map((product, index) => (
    <CardItem key={index} product={product} />
  ));

  return (
    <div className=" bg-gray-50">
      <Carousel items={items} />
    </div>
  );
};

export default CarouselSlider;
