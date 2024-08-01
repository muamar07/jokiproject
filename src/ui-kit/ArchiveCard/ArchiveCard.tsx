import './ArchiveCard.scss'
import Logo from '../../assets/Logo.jpeg'
import { Link } from 'react-router-dom'

export interface cardInterface {
  id: string
  image: string
  name: string
  link?: string
  onClick?: () => void 
}

interface cardInterfaceProps {
  card: cardInterface[]
}

const ArchiveCard: React.FC<cardInterfaceProps> = ({ card }) => {
  return (
    <div className='cardContainer'>
      {card.map((cards) => (
        <div className='card' key={cards.id}>
          <div className='detailContainer'>
            <a href={cards.link}>
              <div className='overlay' onClick={cards.onClick}></div>
              <img
                src={cards.image}
                width='350'
                height='300'
                title='Crew_12.jpg'
                className='rounded-[20px] w-[350px] h-[300px]'
              />
            </a>
            <div className='textContainer'>
              <div className='flex flex-col gap-[10px]'>
                <span>{cards.name}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ArchiveCard
