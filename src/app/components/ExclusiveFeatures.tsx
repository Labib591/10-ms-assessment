import React from 'react'
import { Section } from '../types/product'
import Image from 'next/image';


// {
//         "type": "feature_explanations",
//         "name": "Course Exclusive Feature",
//         "description": "",
//         "bg_color": "",
//         "order_idx": 8,
//         "values": [
//           {
//             "checklist": [
//               "IELTS Academic ও General Training নিয়ে আলোচনা",
//               "Reading, Writing, Listening ও Speaking এর Overview & Format",
//               "প্রতিটি প্রশ্নের ধরন-ভিত্তিক উত্তর করার স্ট্র্যাটেজি",
//               "ভিডিওর সাথে প্র্যাকটিসের সুযোগ"
//             ],
//             "file_type": "image",
//             "file_url": "https://cdn.10minuteschool.com/images/k-12-courses/ielts_mock_sqr.png",
//             "id": "metaHsuQkeQFRI1719742426817",
//             "title": "ভিডিও লেকচার",
//             "video_thumbnail": ""
//           },
//           {
//             "checklist": [
//               "10 Reading & 10 Listening Mock Tests",
//               "Computer-delivered IELTS পরীক্ষার এক্সপেরিয়েন্স",
//               "উত্তর সাবমিট করার সাথে সাথেই রেজাল্ট",
//               "যেকোনো সময়, যেকোনো জায়গা থেকে মক টেস্ট"
//             ],
//             "file_type": "image",
//             "file_url": "https://cdn.10minuteschool.com/images/k-12-courses/ielts_mock_book_sqr.png",
//             "id": "metaVTQUNx3LL61719742426817",
//             "title": "Reading ও Listening Mock Tests",
//             "video_thumbnail": ""
//           }
//         ]
//       },

export default function ExclusiveFeatures({features} : {features : Section[]}) {

  const featuresField = features.filter((field) => field.type === "feature_explanations");
  const featuresValues = featuresField[0]?.values;

  return (
    <div id='feature_explanations'>
      <div className='flex flex-col gap-3 mb-10'>
        <h2 className=' text-xl font-semibold leading-[30px] text-black'>
          {featuresField[0]?.name}
        </h2>
        <div className='grid grid-cols-1 px-5 border divide-y rounded-md border-gray-200'>
          {
            featuresValues.map((feature, index) => (
              <div key={index} className='flex flex-col items-start justify-between gap-3 py-5 md:flex-row'>
                <div className='flex flex-col gap-2'>
                  <h2 className='text-[14px] font-[500px] leading-[30px] text-[#111827] md:text-[16px]'>{feature.title}</h2>
                    {
                    feature.checklist.map((item: string, index: number) => (
                      <div key={index} className='flex flex-row items-center gap-5'>
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 20 20"
                          aria-hidden="true"
                          className="mr-1 mt-[2px]"
                          style={{color:"#6294F8"}}
                          height="20"
                          width="20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        <p className='text-[14px] font-[400px] leading-[24px] text-[#4B5563] md:text-[16px]'>{item}</p>
                      </div>
                    ))
                    }
                </div>
                <div>
                  <div className='mb-4 mx-auto max-w-[350px] transition-opacity duration-300 ease-in-out'>
                    <Image src={feature.file_url || "/placeholder.png"} alt="img" style={{ color: "transparent" }} width={250} height={200}></Image> 
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}
