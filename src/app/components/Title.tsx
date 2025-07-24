import React from 'react'

export default function Title({title} : {title : string}) {
  return (
    <div className='text-white mb-2 text-[21px] font-semibold  md:text-4xl'>{title}</div>
  )
}
