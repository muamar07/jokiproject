import './TextTitle.scss'
import AssetLong from '../../assets/assetLong.png'
import classNames from 'classnames'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
export type TitleType = 'Big' | 'Small'

export interface TextTitleData {
  TitleUp: string
  TitleBottom: string
  isDate: boolean
  date?: string
  type?: TitleType
  className?: string
}
const TextTitle: React.FC<TextTitleData> = ({
  TitleUp,
  TitleBottom,
  isDate,
  date,
  type = 'Big',
  className,
}) => {
  
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className='flex flex-col gap-10' data-aos='fade-up'>
      <div className='flex items-center sm:gap-[70px] gap-[40px]'>
        <img src={AssetLong} className={classNames('assetShape', `assetShape-type__${type}`)} />
        <div className='flex flex-col gap-5'>
          <span className={classNames('titleText', `titleText-type__${type}`)}>
            {TitleUp}
            <br /> {TitleBottom}
          </span>
          {isDate ? <span className='titleText-Date md:ps-2'>{date}</span> : ''}
        </div>
      </div>
    </div>
  )
}

export default TextTitle
