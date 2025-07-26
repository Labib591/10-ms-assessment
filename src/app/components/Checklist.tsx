import React from 'react'
import { ChecklistItem } from '../types/product'
import Image from 'next/image'

export default function Checklist({checklist} : {checklist : ChecklistItem[]}) {
  return (
    <div className='bg-white'>
      <div className='grid py-2 md:p-4'>
        <p className='mb-4 text-xl font-semibold'>
          এই কোর্সে যা থাকছে
        </p>
        <div>
          {
            checklist.map((item, index) => (
              <div key={index} className='flex items-center mb-3 leading-5'>
                <div className='inline-block h-[20px] w-[20px] opacity-0 transition-opacity duration-300 ease-in-out'
                style={{ opacity: 1, fontSize: '0px' }}>
                  <Image src={item.icon || "/placeholder.png"} alt="img" style={{ color: "transparent" }} width={20} height={20}></Image>
                </div>
              <h4 className='mb-0 inline-block pl-4 tracking-[0.005em] text-[#111827]'>{item.text}</h4>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}
