import './TextInformation.scss'

export interface FooterData {
  id: number
  contact: string
  link?: string
}

interface FooterProps {
  title: string
  options: FooterData[]
}

const TextInformation: React.FC<FooterProps> = ({ options, title }) => {
  return (
    <div className='flex w-full'>
      <div className='container2'>
        <div className='UMNinfo'>
          <span>{title}</span>
        </div>
        {options.map((option) => (
          <>
            <div className='UIlist' key={option.id}>
              <a href={option.link}>
              <span className='flex'>
                {option.contact}
              </span>
              </a>
            </div>
          </>
        ))}
      </div>
    </div>
  )
}

export default TextInformation
