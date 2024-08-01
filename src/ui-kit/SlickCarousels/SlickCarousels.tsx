import './SlickCarousels.scss'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import Logo from '../../assets/Logo.jpeg'

const SlickCarousels = () => {
  // const tes = console.log('Halo')
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <div className='slick'>
      <div>
        <h2>Single Item</h2>
        <Slider {...settings} className='slick'>
          <div>
            <h3 className='text-black'>1</h3>
          </div>
          <div>
            <h3 className='text-black'>2</h3>
          </div>
        </Slider>
      </div>
    </div>
  )
}

export default SlickCarousels
