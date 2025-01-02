"use client";

import { useActionState } from "react";
import { UpdateGuest } from "../_lib/actions";
import { useFormStatus } from "react-dom";


const UpdateProfileForm = ({guest,children}) => {
      const {id, fullName,email,nationalID, nationality,countryFlag}=guest;
    
  return  <form action={UpdateGuest} className="bg-primary-900 py-8 px-12 text-lg flex gap-6 flex-col">
  <div className="space-y-2">
    <label>Full name</label>
    <input
      disabled
      name="fullName"
      defaultValue={fullName}
      className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
    />
  </div>

  <div className="space-y-2">
    <label>Email address</label>
    <input
      disabled
      name="email"
      defaultValue={email}
      className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
    />
  </div>

  <div className="space-y-2">
    <div className="flex items-center justify-between">
      <label htmlFor="nationality">Where are you from?</label>
      <img
      name="countryFlag"
        src={countryFlag}
        alt="Country flag"
        className="h-5 rounded-sm"
      />
    </div>

   {children}
  </div>

  <div className="space-y-2">
    <label htmlFor="nationalID">National ID number</label>
    <input
      name="nationalID"
      defaultValue={nationalID}
      className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
    />
  </div>

  <div className="flex justify-end items-center gap-6">
    <Button/>
  </div>
</form>
}

export function Button(){
  const {pending}= useFormStatus();
return <button className="bg-accent-500 px-8 py-4 text-primary-800 font-semibold hover:bg-accent-600 transition-all disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300">
{pending? "Updating...":"Update profile"}
</button>
}
export default UpdateProfileForm