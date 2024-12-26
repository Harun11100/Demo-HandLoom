import Header from '@/components/Header'
import Products from '@/components/Product'
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards'
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
          }
  ]

          
         

const Home = () => {
  return (
    <div className='bg-gray-100'>
      <Header/>
      <div className='bg-gray-800 text-white text-center'>
            <InfiniteMovingCards items={items}/>
      </div>
      <main className="bg-gray-100 max-w-screen-xl mx-auto py-4 px-6">
       
       <Products/>
      </main>
    </div>
  )
}

export default Home
