import Image from 'next/image'
import React from 'react'
import bg from '../../public/bg.png'
const Home = () => {
 return   <main className="mt-24 ">
 <Image  fill src={bg} className='object-cover object-top' quality={100} placeholder='blur' alt="Mountains and forests with two cabins" />

 <div className="relative z-10 text-center">
   <h1 className="text-8xl text-primary-50 mb-10 tracking-tight font-normal">
     Welcome to paradise.
   </h1>
   <a
     href="/cabins"
     className="bg-accent-500 px-8 py-6 text-primary-800 text-lg font-semibold hover:bg-accent-600 transition-all"
   >
     Explore luxury cabins
   </a>
 </div>
</main>
}

export default Home