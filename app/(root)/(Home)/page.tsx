import Header from '@/components/Header'
import Products from '@/components/Product'
import React from 'react'

const Home = () => {
  return (
    <div>
      <Header/>
      <main className="bg-gray-100">
       <Products/>
      </main>
    </div>
  )
}

export default Home