import { ArchiveCard } from 'ui-kit'
import './CardComponent.scss'
import { cardInterface } from 'ui-kit/ArchiveCard/ArchiveCard'
import Logo from '../../assets/Logo.jpeg'
// import foto from ''

const CardComponent = () => {
  const cardData: cardInterface[] = [
    {
      id: '1',
      image:
        'https://multimedianusantara-my.sharepoint.com/personal/angga_sahroni_student_umn_ac_id/_layouts/15/embed.aspx?UniqueId=8e9c5172-db47-4d23-920e-7a0bfc04dc1b',
      name: 'Lembaga Kampus',
      // detail: 'Campus Visit, UMN Documentation, FLY UMN',
    },
    {
      id: '2',
      image:
        'https://multimedianusantara-my.sharepoint.com/personal/angga_sahroni_student_umn_ac_id/_layouts/15/embed.aspx?UniqueId=8fc35427-cb8e-4ff3-af52-83594788a8e1',
      name: 'Organisasi',
      // detail: 'DKBM, BEM',
    },
    {
      id: '3',
      image:
        'https://multimedianusantara-my.sharepoint.com/personal/angga_sahroni_student_umn_ac_id/_layouts/15/embed.aspx?UniqueId=016bb8c7-45a2-4f85-9973-57189749bc56',
      name: 'UKM Olahraga',
      // detail:
      //   'Lions Basketball, Lions Futsal, Capoeira, Lions Badminton, Taekwondo UMN, Tenis Meja, Lions Voli, Spectre, Fortius',
    },
    {
      id: '4',
      image:
        'https://multimedianusantara-my.sharepoint.com/personal/angga_sahroni_student_umn_ac_id/_layouts/15/embed.aspx?UniqueId=241d2b3e-d494-413a-b35a-75e66d0df0a3',
      name: 'UKM Seni dan Budaya',
      // detail:
      //   'Ultima Sonora, Teater Katak, Tracce, J-Caffe, Qorie, Obscura, Street Dance, USO, Ultima Toys, Mufomic',
    },
  ]
  return (
    <div className='cardComponents w-full'>
      {/* <div></div> */}
      <ArchiveCard card={cardData} />
    </div>
  )
}

export default CardComponent
