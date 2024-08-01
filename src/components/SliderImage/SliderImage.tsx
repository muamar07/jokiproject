import './SliderImage.scss'
import React, { useState } from 'react'
import { SliderData } from './sliderData'
import { Button, Icon, SlickCarousels } from 'ui-kit'
import { useNavigate, useParams } from 'react-router-dom'

const SliderImage = ({ slides = SliderData }) => {
  const [current, setCurrent] = useState(0)
  const length = slides.length
  const { id } = useParams()

  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/archiveType/1')
  }
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null
  }

  // const slide = slides.find((slide) => slide.id === id);

  // if(!slide) {
  //   return <div>Data Tidak Ditemukan</div>
  // }
  return (
    <section className='slider'>
      <div className='image'>
        {SliderData.map((slide, index) => {
          return (
            <div className={index === current ? 'slide active' : 'slide'} key={index}>
              {index === current && (
                <div>
                  <img
                    src={slide.image}
                    alt='travel image'
                    className='image'
                    onClick={handleClick}
                  />
                  <span className='relative'>Lembaga Kampus</span>
                </div>
              )}
            </div>
          )
        })}
      </div>
      <button className='left-arrow' onClick={prevSlide}>
        {'<'}
      </button>
      <button className='right-arrow' onClick={nextSlide}>
        {'>'}
      </button>
      <div className='button'></div>
    </section>
  )
}

export default SliderImage
