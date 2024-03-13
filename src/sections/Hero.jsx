import React, { useState } from 'react'
import Button from '../components/Button'
import { arrowRight } from '../assets/icons'
import { shoes, statistics } from '../constants'
import { bigShoe1, bigShoe2, bigShoe3 } from '../assets/images'
import { ShoeCard } from '../components/ShoeCard'

const Hero = () => {

   const [bigShoeImg, setbigShoeImg] = useState(bigShoe3)
  return (
    <section id='home' className='xl:flex justify-center min-h-screen gap-10 max-container'
    >
      <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28'>
        <p className='pt-10 text-xl font-montserrat text-coral-red'>Our Summer Collection</p>
        <h1 className='mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold'>
          <span className=' xl:bg-transparent xl:whitespace-nowrap relative z-10 pr-10 shadow-inherit'>The New Arrival</span>
          <br />
          <span className='text-coral-red inline-block mt-3' >Nike</span> Shoes
          </h1>
          <p className='font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm'>
            Discover stylish Nike arrivals, quality comfort, and innovation for your active life.
          </p>

          <Button label='Shop Now' iconURL={arrowRight}/>

          <div className='flex justify-start items-start flex-wrap w-full mt-10 gap-16'>
            {statistics.map( (stat , index) =>(
              <div >
                <p className=' font-palanquin font-bold text-3xl'>{stat.value}</p>
                <p className='leading-7 text-slate-gray font-montserrat'>{stat.label}</p>
              </div>
            ))}
          </div>
      </div>
      <div className='mt-2 relative flex justify-center items-center xl:min-h-screen max-xl:py-40 object-contain' >
        <img src={bigShoeImg} alt='shoe collection' width={610} height={500}
        className='z-10 relative object-contain'/>

      <div className='flex sm:gap-6 gap-4 absolute -bottom-[5%] px-6 md'>
        {shoes.map((shoe) => (
          <div key={shoe}>
            <ShoeCard 
              imgURL={shoe}
              changeBigShoeImage = {(shoe) => {setbigShoeImg(shoe)}}
              bigShoeImg = {bigShoeImg}
            />
          </div>
        ))}
      </div>
      </div>
    </section>
  )
}

export default Hero