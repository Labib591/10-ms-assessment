import React from 'react'
import { Section } from '../types/product'
import Image from 'next/image';

export default function CourseLayout({course} : {course : Section[]}) {

  const courseField = course.filter((field) => field.type === "features");

  return (
    <div>
      <div className='flex flex-col gap-3'>
        <h1 className='mb-4 text-xl font-semibold md:text-2xl'>{courseField[0]?.name}</h1>
        <div className='mb-16 grid grid-cols-1 gap-4 rounded-md border bg-[#111827] p-6 md:grid-cols-2 md:gap-8'>
          {
            courseField[0]?.values.map((feature, index) => (
              <div key={index} className='flex flex-row items-start gap-3 m-1'>
                <div>
                  <div className='mb-4 mx-auto opacity-0 transition-opacity duration-300 ease-in-out' style={{ opacity: 1, fontSize: '0px' }}>
                    <Image src={feature.icon || "/placeholder.png"} alt="img" style={{ color: "transparent" }} width={36} height={36}></Image>
                  </div>
                </div>
                <div className='flex flex-col flex-1 gap-2'>
                  <h2 className='text-[18px] font-[500px] leading-[26px] text-white '>{feature.title}</h2>
                  <h2 className='text-[14px] font-[400px] leading-[22px] text-[#9CA3AF]'>{feature.subtitle}</h2>
                </div>
                <div>

                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}
