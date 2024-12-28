import CarouselSlider from "@/components/CarouselSlider";
import CountdownTimer from "@/components/CountdownTimer";
import Footer from "@/components/Footer";

import Products from "@/components/Product";
import Promo from "@/components/Promo";
import Servicing from "@/components/Servicing";




import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { item } from "@/constant";
import React from "react";

const items=item

const Home = () => {
  return (
    <div className="bg-gray-100">
      <div className="bg-gray-800 text-white text-center">
        <InfiniteMovingCards items={items} />
      </div>
      <main className="bg-gray-100 max-w-screen-xl mx-auto py-4 px-6">
        <Products />
        <div className="border-4 border-red-600 rounded-xl">
          <div>
            <CountdownTimer endTime="2024-12-31T23:59:59" />
          </div>
          <CarouselSlider />
        </div>
        <div className="mt-20 mb-25">
          <Promo/>
        </div>
        <Servicing/>
      </main>
    
      <Footer/>
    </div>
  );
};

export default Home;
