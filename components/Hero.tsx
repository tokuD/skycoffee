import Image from 'next/image'
import React from 'react'
import coffee from '../public/coffee.jpg'

type Props = {}

const Hero = (props: Props) => {
  console.log(coffee)
  return (
    <div className='m-0'>
      <Image src={coffee} alt='coffee' height='1500' objectFit='cover'/>
    </div>
  )
}

export default Hero