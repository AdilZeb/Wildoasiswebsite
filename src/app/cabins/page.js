import React, { Suspense } from 'react'
import CabinsList from '../_components/CabinsList';
import Spinner from '../_components/Spinner';
import Filter from '../_components/filter';
import ReservationReminder from '../_components/ReservationReminder';
export const metadata = {
  title:"Cabins",
}
const Cabins
 =  ({searchParams}) => {
  console.log(searchParams);
  const filter= searchParams?.capacity ?? "all";
  return (
    <div>
      <h1 className="text-4xl mb-5 text-accent-400 font-medium">
        Our Luxury Cabins
      </h1>
      <p className="text-primary-200 text-lg mb-10">
        Cozy yet luxurious cabins, located right in the heart of the Italian
        Dolomites. Imagine waking up to beautiful mountain views, spending your
        days exploring the dark forests around, or just relaxing in your private
        hot tub under the stars. Enjoy nature&apos;s beauty in your own little home
        away from home. The perfect spot for a peaceful, calm vacation. Welcome
        to paradise.
      </p>
        <div className='mb-5 flex justify-end'>
          <Filter/>
        </div>
      <Suspense fallback={<Spinner/>} key={filter}>
      <CabinsList filter={filter}/>
      <ReservationReminder/>
      </Suspense>
    </div>)
}

export default Cabins