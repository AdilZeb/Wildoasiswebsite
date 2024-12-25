import React from 'react'
import CabinCard from './CabinCard'
import { getCabins } from '../_lib/data-service';

const CabinsList =async  ({filter}) => {
  const cabins= await getCabins();
  let displayCabins;
  if(!cabins) return null;
  if(filter=== "all") displayCabins= cabins;
  if(filter === "small") displayCabins = cabins.filter((cabin)=> cabin?.maxCapacity <= 2);
  if(filter === "medium") displayCabins = cabins.filter((cabin)=> cabin?.maxCapacity > 2 && cabin?.maxCapacity <= 7);
  if(filter === "large") displayCabins = cabins.filter((cabin)=> cabin?.maxCapacity >= 8 && cabin?.maxCapacity <= 12);
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
    {displayCabins?.map((cabin) => (
      <CabinCard cabin={cabin} key={cabin.id} />
    ))}
  </div>
  )
}

export default CabinsList