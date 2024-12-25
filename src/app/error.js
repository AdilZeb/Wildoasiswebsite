'use client'
import Link from 'next/link'
import React from 'react'

const Error = ({error, reset}) => {
  return (
    <div className='flex flex-col justify-center items-center '>
      <h1 className='text-3xl font-bold text-accent-100'>Something went wrong</h1>
      <p className='text-lg text-primary-400'>{error.message}</p>
      <Link onClick={reset} href="/" className='inline-block bg-accent-500 text-primary-800 px-6  mt-6 py-3 text-lg'>let&apos;s Retry</Link>
    </div>
  )
}

export default Error