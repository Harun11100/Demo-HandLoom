import CarouselSlider from "@/components/CarouselSlider";
import CountdownTimer from "@/components/CountdownTimer";
import Footer from "@/components/Footer";
import Products from "@/components/Product";
import Promo from "@/components/Promo";
import Servicing from "@/components/Servicing";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { item } from "@/constant";
import { fetchProducts } from "@/lib/utils";
import React from "react";


const items=item

const Home = async () => {

  const products=await fetchProducts()

  return (
    <div className="bg-gray-100">
      <div className="bg-gray-800 text-white text-center">
        <InfiniteMovingCards items={items} />
      </div>
      <main className="bg-gray-100 max-w-screen-xl mx-auto py-4 px-6">
        <Products products={products}/>
        <div className="border-4 border-yellow-500 rounded-xl">
          <div>
            <CountdownTimer endTime="2025-01-10T23:59:59" />
          </div>
          <CarouselSlider products={products}/>
        </div>
        <div className="mt-20 mb-25">
          <Promo/>
        </div>
         <div className="mt-20 mb-25">
          <Servicing/>
        </div>
       
      </main>
    
      <Footer/>
    </div>
  );
};

export default Home;
