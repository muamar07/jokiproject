import './LastPage.scss'
import LogoBulat from '../../assets/LogoBulat.png'
import { useNavigate } from 'react-router-dom'

const LastPage = () => {
  const generateRandNum = () => {
    const code = (1000 + Math.floor(Math.random() * 9000)).toString()
    return code
  }

  const navigate = useNavigate()

  const HandleLogo = () => {
    navigate('/')
  }

  return (
    <div className='background'>
      <div className='container'>
        <div className='thankyou'>
          <span>THANK YOU FOR</span>
          <span>SUBMITTING</span>
        </div>
        <div className='desc'>
          <span>Your submission has been sent</span>
        </div>
        <div className='bawahan'>
          <div className='regards'>
            <img src={LogoBulat} alt='UMN DOC' onClick={HandleLogo} className='cursor-pointer imageLast' />
            <span className='best-regards'>
              Regards,<br></br>UMN Documentation
            </span>
          </div>
          {/* <div className='access-code'>
            <span>
              Your Access Code:
              <br />
              <span className='rand'>{generateRandNum()}</span>
            </span>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default LastPage
