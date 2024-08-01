import './Headline.scss'
// import Video from '../../assets/HeadLine.mp4'
import LogoUMN from '../../assets/logoumnwhite.png'

const Headline = () => {
  return (
    <div className='w-full backDrop'>
      <div className='video-background'>
        <video autoPlay loop muted>
          {/* <source src={Video} type='video/mp4' /> */}
        </video>
        <div className='overlay'>
          <div className='flex justify-center'>
            <img src={LogoUMN} className='logoHeadline' />
          </div>
          <div className='textHeadline h-screen flex items-center justify-center'>
            <span className='textHeadline-text'>
              <span className='textHeadline-text-first'>
                Welcome to
                <br />
              </span>
              <span className='textHeadline-text-second'>
                UMN DOCUMENTATION <span className='textHeadline-text-third'>Portal</span>
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Headline
