import React from 'react'
import { auth } from '../_lib/auth'
export const metadata = {
  title:"Accounts",
}
const Accounts = async () => {
  const session = await auth();
  console.log(session);
  return (
    <h2 className="font-semibold text-2xl text-accent-400 mb-4">
    Welcome {session?.user?.name.split(" ")[0]}
  </h2>
  )
}

export default Accounts