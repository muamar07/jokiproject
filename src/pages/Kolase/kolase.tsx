import { Headline } from 'components'
import { Button, Icon, SlickCarousels } from 'ui-kit'
import './kolase.scss'

const Kolase = () => {
  return (
  <div className='p-2'>

  </div>
  )
}

export default Kolase
export const Home = () => {
  return (
    <div className='flex flex-col items-center'>
      <div className='w-full flex flex-col justify-center items-center h-screen gap-[400px]'>
        <Headline />
        <div className='flex flex-end'>
          <div className='iconContainer'>
            <Icon type='Down' size='large' className='scrollIcon' />
          </div>
        </div>
      </div>
      {/* <Button><Link to='/kolase' /></Button> */}
      <div className='flex flex-col'>
        <SlickCarousels />
        {/* <div className='w-full flex flex-col justify-center'> */}
        {/* <CarouselPhoto /> */}
        {/* </div> */}
        {/* <div className='w-full flex flex-col justify-center'>
              <div>
                <CardComponent />
              </div>
            </div> */}
      </div>
    </div>
  )
}
