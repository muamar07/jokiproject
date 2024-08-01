import { useDispatch } from 'react-redux'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from 'utils/getAuth'
import { logout } from 'utils/redux/slice/login.slice'
import './NavBar.scss'
import { useState, useEffect } from 'react'
import LogoUMN from '../../assets/logoumn.svg'

const navigationData = [
  { name: 'Home', href: '/', current: false },
  { name: 'Archive', href: '/sec', current: true },
]

const Navbar = () => {
  // const dispatch = useDispatch()
  const navigate = useNavigate()
  const { auth } = useAuth()
  const location = useLocation() // Get the current location
  const [scrolled, setScrolled] = useState(false)
  const [routeHome, setRouteHome] = useState(false)
  // const [scrollEnabled, setScrollEnabled] = useState(false)
  // const [scrollLocked, setScrollLocked] = useState(true)

  const handleLogout = () => {
    // dispatch(logout())
    navigate('/login')
  }

  const handleHome = () => {
    navigate('/')
  }

  // useEffect(() => {
  //   // Function to handle wheel events
  //   const handleWheel = (e: WheelEvent) => {
  //     console.log('Wheel event deltaY:', e.deltaY) // Log the deltaY value

  //     if (!scrollEnabled && e.deltaY >= 300) {
  //       console.log('Enabling scrolling...')
  //       setScrollEnabled(true) // Enable scrolling when user tries to scroll
  //       document.body.style.overflow = 'auto' // Re-enable scrolling for the body
  //     }
  //   }

  //   // Attach the wheel event listener
  //   window.addEventListener('wheel', handleWheel)

  //   // Clean up the event listener when the component unmounts
  //   return () => {
  //     window.removeEventListener('wheel', handleWheel)
  //   }
  // }, [scrollEnabled])

  useEffect(() => {
    // Function to handle scroll events
    const handleScroll = () => {
      // console.log('Scroll Y:', window.scrollY)
      // console.log('Inner Height:', window.innerHeight)
      if (window.scrollY >= 100) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll)

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    setRouteHome(location.pathname === '/') // Check if the path is '/'
  }, [location.pathname])

  return (
    <>
      <div className='master-container'>
        <div className={`navbar-container ${scrolled || !routeHome ? 'scrolled' : ''}`}>
          <div className='navbar-start'>
            <div className='dropdown'>
              <label tabIndex={0} className='btn btn-ghost lg:hidden'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-5 w-5'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M4 6h16M4 12h8m-8 6h16'
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'
              >
                {navigationData.map((item) => (
                  <li key={item.name}>
                    <Link to={item.href}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* <a className='btn-ghost normal-case text-xl navbar-button-text'>UMN Documentation</a> */}
            {/* <ul className='menu menu-horizontal px-1 hidden lg:flex'>
              {navigationData.map((item) => (
                <li key={item.name}>
                  <Link to={item.href}>{item.name}</Link>
                </li>
              ))}
            </ul> */}
            <img src={LogoUMN} alt='logo-umn' className='navbar-container-left cursor-pointer' onClick={handleHome}/>
          </div>
          <div className='navbar-container-right navbar-button-text'>
            <ul className='menu menu-horizontal px-1 hidden lg:flex'>
              {navigationData.map((item) => (
                <li key={item.name}>
                  <Link to={item.href}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
