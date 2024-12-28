import Link from "next/link";
import React from "react";
import { auth } from "../_lib/auth";

const Navigation = async () => {
  const session = await auth();
  
  return (
    
      <ul className="flex gap-8 items-center text-xl z-10">
        
        <li>
          <Link className="hover:text-accent-400 transition-colors" href="/cabins">Cabins</Link>
        </li>
        <li>
          <Link className="hover:text-accent-400 transition-colors" href="/about">About</Link>
        </li>
        <li>
          {session?.user.image ? <Link  href="/accounts" className="flex items-center gap-2 hover:text-accent-400 transition-colors">
          <img className="h-8 mb-2 rounded-full" src={session.user.image} alt={session.user.name} referrerPolicy="no-referrer" ></img>
          <span>Guests Area</span>
          </Link> : <Link className="hover:text-accent-400 transition-colors" href="/accounts">Guests Area</Link>}
        </li> 
      </ul>
   
  );
};

export default Navigation;
