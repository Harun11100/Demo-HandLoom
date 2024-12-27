import CarouselSlider from '@/components/CarouselSlider'
import CountdownTimer from '@/components/CountdownTimer'
import Products from '@/components/Product'
import { Carousel } from '@/components/ui/apple-cards-carousel'
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards'
import { offerItems } from '@/const'
import React from 'react'

const items=[
      {
            img:'/panjabi1.jpg',
            title: "Punjabi"
            },
            {
           img:'/shirt.jpg',
            title: "Shirt"

          },
          {
             img:'/jacket1.jpg',
            title: "Jacket",
          },
          {
            img:'/t-shirt.jpg',
            title: "T-shirt"
          },
          {
            img:'/polo-t-shirt.jpg',
            title:'Polo T-shirt'
          }
  ]

          
     const item =offerItems

const Home = () => {
  return (
    <div className='bg-gray-100'>
 
      <div className='bg-gray-800 text-white text-center'>
            <InfiniteMovingCards items={items}/>
      </div>
      <main className="bg-gray-100 max-w-screen-xl mx-auto py-4 px-6">
       
       <Products/>
       <div className='border-4 border-red-600 rounded-xl'>
          <div className=''>
          <CountdownTimer endTime='2024-12-31T23:59:59'/>
          </div>
         <CarouselSlider/>
       </div>
      </main>
    </div>
  )
}

export default Home
