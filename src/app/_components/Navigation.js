import Link from "next/link";
import React from "react";

const Navigation = () => {
  return (
    
      <ul className="flex gap-8 text-xl z-10">
        
        <li>
          <Link href="/cabins">Cabins</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/accounts">Guest area</Link>
        </li>
      </ul>
   
  );
};

export default Navigation;
