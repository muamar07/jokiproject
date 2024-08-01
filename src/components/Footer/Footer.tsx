import './Footer.scss'
import Logo from '../../assets/Logo.jpeg'
import { TextInformation } from 'ui-kit'
import { FooterData } from 'ui-kit/TextInformation/TextInformation'

const Footer = () => {
  const UMNInfo: FooterData[] = [
    {
      id: 1,
      contact: 'Instagram : instagram.com/umndocumentation',
      link: 'https://www.instagram.com/umndocumentation/'
    },
    {
      id: 2,
      contact: 'Email : documentation@umn.ac.id',
      link: 'mailto:documentation@umn.ac.id'
    },
  ]
  return (
    <div className='containerFooter '>
      {/* <div className='MainContainer p-5 '>
        <div className='container1'>
          <div className='logoUMNDOC'>
            <img src={Logo} alt='' />
          </div>
          <div className='titleUMNDOC'>
            <span>UMN DOCUMENTATION</span>
          </div>
          <div className='titleUMN'>
            <span>Universitas Multimedia Nusantara</span>
          </div>
          <div className='descCont1'>
            <span>
              Jl. Boulevard, Gading Serpong, Kel. Curug Sangereng, Kec. Kelapa Dua, Kab. Tangerang,
              Prop. Banten, Indonesia
            </span>
          </div>
        </div>
        <TextInformation options={UMNInfo} title='Contact' />
        {/* <TextInformation options={OurInfo} title='Our Information' /> */}
      {/* </div> */}
      <div className='lastContainer'>
        <p>&copy; UMN DOCUMENTATION, 2023</p>
        <br />
      </div>
    </div>
  )
}

export default Footer
