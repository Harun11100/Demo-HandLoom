import { service } from '@/constant'
import Image from 'next/image'
import React from 'react'

const Servicing = () => {
  return (
    <section className="w-full max-w-screen-xl mx-auto py-4 px-6">
     <div className='grid grid-cols-2  gap-6 md:grid-cols-4'>
      {service.map((service) => (
         <div key={service.title}>
              <div className="flex items-center justify-center">
                  <Image src={service.icon} alt={service.title} width={50} height={50} />
              </div>
              <div className='text-center'>
                  <h3 className='font-semibold'>{service.title}</h3>
                  <p>{service.description}</p>
              </div>
         </div>   

      ))}
     </div>
    </section>
  )
}

export default Servicing