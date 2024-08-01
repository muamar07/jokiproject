import './Dashboard.scss'
import Success from '../../assets/pics/success.png'
import Smile from '../../assets/pics/smile.png'
import Flower from '../../assets/pics/flower.png'
import { Button, ModalView } from 'ui-kit'
import useModal from 'utils/getModal'
import { NavLink } from 'react-router-dom'

const Dashboard = () => {
  const [VisibleDummy, ToggledDummy] = useModal()
  const [VisibleDummy2, ToggledDummy2] = useModal()
  return (
    <>
      <div className='dashboardMain'>
        <img src={Smile} className='dashboardSmile' />
        <Button className='dashboardDummy' onClick={ToggledDummy}>
          Bukan ini
        </Button>
        <div className='dashboardContainer'>
          <img src={Success} className='imgSuccess' />
          <div className='flex flex-col justify-center items-center gap-9 max-w-4xl'>
            <span className='dashboardText'>
              Hai, untuk kamu yang udah scan QR Code nya. Selamat ya, yuk diisi biar gak penasaran
            </span>
            <NavLink to='main' className='dashboardBtnNext'>
              <Button className='dashboardBtnNext'>Klik disini yaa</Button>
            </NavLink>
          </div>
        </div>
        <img src={Flower} className='dashboardFlower' />
        <Button className='dashboardDummyBottom' onClick={ToggledDummy2}>
          Apalagi ini
        </Button>
      </div>

      <ModalView
        title='Alert'
        visible={VisibleDummy}
        toggle={ToggledDummy}
        description='Kan dah dibilang bukan ini'
      />
      <ModalView
        title='Alert'
        visible={VisibleDummy2}
        toggle={ToggledDummy2}
        description='Yehh ngeyel, kan dah dibilang bukan ini weh'
      />
    </>
  )
}

export default Dashboard
