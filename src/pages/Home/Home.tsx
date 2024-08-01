import './Home.scss'
import bgPhoto from '../../assets/photoBg.png'
import Logo from '../../assets/Logo.jpeg'
import YellowShape from '../../assets/yellowShape.png'
import { Button } from 'ui-kit'
import { useNavigate } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import { FormField } from 'ui-kit/FormField'

const Home = () => {
  const navigate = useNavigate()

  const handleRegister = () => {
    navigate('/admin')
  }

  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])
  return (
    <div className='flex flex-col'>
      <div className='absolute flex justify-center w-full'>
        <span className='titleText'>UMN DOCUMENTATION | ADMIN AREA</span>
      </div>
      <div className='bgHome' data-aos='fade-up'>
        <div className='photoCover'>
          <div className='coverContainer'>
            <img src={Logo} className='coverContainer-image' />
            <span className='coverContainer-textTitle'>User Login</span>
            <FormField
              type='text'
              placeholder='Input your email'
              label='Email'
              name='email'
              isRequired
            />
            <FormField
              type='password'
              placeholder='Input your password'
              label='Password'
              name='password'
              isRequired
            />
            <Button className='coverContainer-btn' onClick={handleRegister}>
              Login
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
