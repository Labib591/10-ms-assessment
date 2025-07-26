import React from 'react'
import { Section } from '../types/product'
import Accordion from './Accordion';

export default function CourseDetails({data} : {data : Section[]}) {

  const details = data.filter((item) => item.type === 'about');
  const detailsValues = details[0]?.values;

  return (
    <div>
      <div id='about'>
        <div className='mb-6 md:mb-10 mt-4 max-w-[900px] md:mt-[42px] '>
          <div className='mt-10 md:mt-0'>
            <h2 className='text-xl font-semibold md:mb-4 md:text-2xl'>
              {details[0]?.name}
            </h2>
            <div className='rounded-lg py-2 md:border md:px-5 border-gray-200'>
              {
                detailsValues.map((item, index) => (
                  <Accordion key={index} heading={item.title} content={item.description}></Accordion>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
