import './TextMapping.scss'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export interface textMappingData {
  id: number
  textMap: string
}

interface textMappingProps{
  title: string
  options?: textMappingData[]
}

const TextMapping: React.FC<textMappingProps> = ({title, options}) => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  
  return (
  <div data-aos='fade-up'>
    <div className='ruleText'>
      <span className='ruleText-title'>
      {title} 
      </span>
      {/* <div className='ruleText-detail'>
        {options.map((option) => (
          <span key={option.id}>{option.textMap}</span>
        ))}
      </div> */}
    </div>
  </div>
  )
}

export default TextMapping
