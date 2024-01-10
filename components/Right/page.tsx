import Link from 'next/link'
import React from 'react'

function Right() {
  return (
    <div className='right d-none d-lg-block'>
      <div className="email d-flex flex-column fade-in">
        <Link href={'mailto:'}>mshuheb8@gmail.com</Link>
      </div>
    </div>
  )
}

export default Right
