"use client"
import { usePathname, useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation';
import React from 'react'

const Filter = () => {
  const serchParams= useSearchParams();
   const router= useRouter();
  const pathname= usePathname();

  const activeLink= serchParams.get("capacity");
  function handlefilter(filter){
  const params= new URLSearchParams(serchParams);
  params.set("capacity", filter);
  router.replace(`${pathname}?${params.toString()}`,{scroll: false});
  }

  return (
    <div className='border border-primary-400 flex'>
       
        <Button filter={'all'} activeLink={activeLink} handlefilter={handlefilter}>All Cabins</Button>
        <Button filter={'small'} activeLink={activeLink} handlefilter={handlefilter}>1&mdash; 3 cabins</Button>
        <Button filter={'medium'} activeLink={activeLink} handlefilter={handlefilter}>4 &mdash; 7 cabins</Button>
        <Button filter={'large'} activeLink={activeLink} handlefilter={handlefilter}>8 &mdash; 12 cabins</Button>


    </div>
  )
}

function Button({children,activeLink,filter,handlefilter}) {
 return (
   <button onClick={()=>handlefilter(filter)} className={`hover:bg-slate-700 bg-slate-800  px-5 py-2 ${activeLink === filter && "bg-slate-700"}`}>{children}</button>
 )
}
export default Filter