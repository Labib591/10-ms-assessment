import React from 'react'

export default function Description({description} : {description : string}) {
  return (
    <div>
      <div className='text-gray-400' style={{ overflow: 'hidden', height: 'auto', maskImage: 'none' }}>
        <span dangerouslySetInnerHTML={{ __html: description }} style={{whiteSpace: 'pre-wrap'}}></span>
      </div>
    </div>
  )
}
