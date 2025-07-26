import React from 'react'
import { CTA_TEXT } from '../types/product'

export default function CTA({cta} : {cta : CTA_TEXT}) {



  return (
    <div className='bg-white'>
      <div className='w-full p-4 md:h-auto'>
        <div className='relative md:static'>
          <div className='flex flex-col w-full'>
        <div className='flex items-center justify-between md:flex-col md:items-start'>
          <div className='md:mb-3'>
            <h1 className='inline-block text-2xl font-semibold'>৳1000</h1>
          </div>
        </div>
        <button className='cta'>{cta.name}</button>
      </div>
        </div>
      </div>
    </div>
  )
}
