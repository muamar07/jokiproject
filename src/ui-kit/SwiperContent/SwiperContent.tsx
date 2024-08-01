import React from 'react'
import './SwiperContent.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
// import 'swiper/css'
import 'swiper/css/navigation'
import Logo from '../../assets/Logo.jpeg'
import Contoh from '../../assets/fotoContoh.jpeg'

export interface SwiperContentInterface {
  id: number
  url: string
  text: string
}

interface SwiperContentProps {
  options: SwiperContentInterface[]
}

const swiperBreakPoints = {
  300: {
    slidesPerView: 1,
    spaceBetween: '10',
  },
  768: {
    slidesPerView: 2,
    spaceBetween: '20',
  },
  1024: {
    slidesPerView: 3,
    spaceBetween: '30',
  },
}

const SwiperContent: React.FC<SwiperContentProps> = ({ options }) => {
  return (
    <>
      {/* <Swiper
        className='swiper-gap'
        // spaceBetween={0}
        slidesPerView={1}
        breakpoints={swiperBreakPoints}
      > */}
        {/* {options.map((option) => (
          <> */}
        {/* <SwiperSlide>
          <div className='w-full img-container flex'>
            <div>
              <img src={Logo} alt='' className=' w-full h-[700px]' />
              <div>
                <div className='flex textSpan'>
                  <div className='flex flex-col gap-4 w-[80%]'></div>
                  <div className='mt-[150px] ml-[60px] eventText'>
                    <span>Tessstttt</span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img src={Contoh} alt='' className=' w-full h-[700px]' />
              <div>
                <div className='flex textSpan'>
                  <div className='flex flex-col gap-4 w-[80%]'></div>
                  <div className='mt-[150px] ml-[60px] eventText'>
                    <span>Tessstttt</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide> */}
        {/* </>
        ))} */}
      {/* </Swiper> */}
    </>
  )
}

export default SwiperContent
