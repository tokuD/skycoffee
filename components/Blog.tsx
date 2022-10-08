import Image from 'next/image'
import React from 'react'
import milk from '../public/kim-gorga-p3ViLmVgVJ4-unsplash.jpg'

type Props = {}

const Blog = (props: Props) => {
  return (
    <div className='grid grid-cols-1'>
      <div>
        <Image src={milk} alt='milk' height={1500} objectFit='cover'/>
      </div>
      <h4 className='text-start'>濃厚クリーミーなミルクをどうぞ</h4>
      <small className='text-start'>2030.08.05</small>
    </div>
  )
}

export default Blog