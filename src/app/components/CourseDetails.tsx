import React from 'react'
import { Section } from '../types/product'

    //  {
    //     "type": "about",
    //     "name": "Course details",
    //     "description": "",
    //     "bg_color": "",
    //     "order_idx": 7,
    //     "values": [
    //       {
    //         "description": "\u003Cli\u003EThose who aim to go abroad for work or higher education\u003C/li\u003E\n\u003Cli\u003EThose who want to apply for permanent residency abroad\u003C/li\u003E\n\u003Cli\u003EThose who have appeared for the IELTS exam but are not satisfied with their band score\u003C/li\u003E\n\u003Cli\u003EThose who want to improve their reading, writing, listening, and speaking skills through IELTS for work, business, or personal interest\u003C/li\u003E",
    //         "icon": "0",
    //         "id": "metay6pR9zmhQb1719742431745",
    //         "title": "\u003Ch2\u003E\u003Cb\u003EThis IELTS course is for\u003C/b\u003E\u003C/h2\u003E"
    //       },
    //       {
    //         "description": "\u003Cp\u003EIELTS certificates are accepted in different higher education institutions in the USA and other English-speaking countries across the globe. This exam tests the ability of the candidates to speak, read, listen and write in English.\u003C/p\u003E\u003Cbr\u003E\n\n\u003Cp\u003EMany of us are intimidated by English grammar as English is not our first language. Fortunately, IELTS is essentially a language-based test and not grammar-based. To achieve the desired score, you will require four English language skills: reading, writing, listening and speaking. The more proficient a person is in these four areas, the higher their score will be on the IELTS test.\u003C/p\u003E\u003Cbr\u003E\n\n\u003Cp\u003ETo help IELTS examinees improve these four essential English language skills, 10 Minute School has brought a detailed and well-guided \u003Ca href=\"https://10minuteschool.com/ielts\" style=\"color:blue;\"\u003EIELTS preparation\u003C/a\u003E course. The instructor of this course is Munzereen Shahid (IELTS Band Score 8.5/9), who has recently graduated from the English Department of the world-renowned Oxford University in England.\u003C/p\u003E\u003Cbr\u003E\n\n\n\u003Cp\u003EIf you enroll in our course, you will receive the book “ঘরে বসে IELTS প্রস্তুতি” by Munzereen Shahid, completely free! Along with the video lectures in the course, you can learn strategies from the book and practice to fully prepare for the IELTS exam. This course also includes IELTS Reading and Listening Mock Tests, which will give you a real exam experience and an understanding of band scores. During practice sessions, expert instructors are available in live classes to solve any problems you may encounter. Therefore, now you can have complete IELTS preparation in one course!\u003C/p\u003E\u003Cbr\u003E\n\u003Cp\u003ETo make your IELTS test preparation effortless, efficient, and practical, enroll in \"IELTS Course by Munzereen Shahid\" today and take yourself one step closer to fulfilling your dreams!\u003C/p\u003E",
    //         "icon": "0",
    //         "id": "metajLOJyu2gv91719742431745",
    //         "title": "\u003Ch2\u003E\u003Cb\u003EAbout the IELTS course\u003C/b\u003E\u003C/h2\u003E"
    //       },
    //       {
    //         "description": "\u003Cli\u003EYou will be able to prepare effectively from home for both the ‘Academic IELTS’ and ‘General Training IELTS’ modules. This course has separate sections for both modules.\u003C/li\u003E\n\u003Cli\u003EYou will learn tips, hacks, and techniques according to the question types in the IELTS speaking, reading, listening, and writing tests.\u003C/li\u003E\n\u003Cli\u003EYou will be able to solve all types of IELTS questions correctly and prepare yourself with pen and paper.\u003C/li\u003E\n\u003Cli\u003EAlong with watching the videos, you will have lecture sheets, the book \"ঘরে বসে IELTS প্রস্তুতি\" and Doubt Solving Live Classes for complete preparation.\u003C/li\u003E\n\u003Cli\u003EAfter completing the course, you will be able to enhance your own IELTS preparation by solving the questions in the IELTS Reading and Listening mock tests.\u003C/li\u003E",
    //         "icon": "0",
    //         "id": "metaykWCc9xmir1719742431745",
    //         "title": "\u003Ch2\u003E\u003Cb\u003EThis IELTS course will help you in the following ways:\u003C/b\u003E\u003C/h2\u003E"
    //       }
    //     ]
    //   },

export default function CourseDetails({data} : {data : Section[]}) {

  const details = data.filter((item) => item.type === 'about');
  const detailsValues = details[0]?.values;

  return (
    <div></div>
  )
}
