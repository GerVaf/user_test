import React from 'react'
import Card from './Card'

const Cards = () => {
  return (
    <div className='grid grid-cols-12 gap-5 px-5 xl:p-0 xl:gap-8 xl:w-[1100px] xl:mx-auto'>
        <Card/>
        <Card/>
        <div className='hidden md:col-span-3 md:block lg:hidden'></div>
        <Card/>
    </div>
  )
}

export default Cards