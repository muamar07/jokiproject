import { ArchiveCard, Dropdown, Search } from 'ui-kit'
import './ArchiveType.scss'
import { useState } from 'react';
import { IDropdownOptions } from 'ui-kit/Dropdown/Dropdown';
import { useNavigate } from 'react-router-dom';
import { CardComponent } from 'components';
import { cardInterface } from 'ui-kit/ArchiveCard/ArchiveCard';
import { ArchiveDetail } from 'pages/ArchiveDetail';
import Foto_Crew from '../../assets/Crew_3.jpg'
import Foto_Crew1 from '../../assets/Crew_11.jpg'
import Foto_Crew2 from '../../assets/Crew_12.jpg'

const ArchiveType = () => {
  const navigate = useNavigate()

  const handleUMNDoc = () => {
    navigate('/archiveDetail')
  }
  const cardData: cardInterface[] = [
    {
      id: '1',
      image: Foto_Crew,
      name: 'UMN Documentation',
      onClick: () => {
        handleUMNDoc()
      }
     
    },
    {
      id: '1',
      image: Foto_Crew1,
      name: 'Campus Visit',
    },
    {
      id: '1',
      image: Foto_Crew2 ,
      name: 'FLY UMN',
    },
    // {
    //   id: '2',
    //   image: 'https://multimedianusantara-my.sharepoint.com/personal/angga_sahroni_student_umn_ac_id/_layouts/15/embed.aspx?UniqueId=016bb8c7-45a2-4f85-9973-57189749bc56',
    //   name: 'DKBM',
    //   detail: 'Lions Basketball, Lions Futsal, Capoeira, Lions Badminton, Taekwondo UMN, Tenis Meja, Lions Voli, Spectre, Fortius'
    // },
    // {
    //   id: '2',
    //   image: 'https://multimedianusantara-my.sharepoint.com/personal/angga_sahroni_student_umn_ac_id/_layouts/15/embed.aspx?UniqueId=016bb8c7-45a2-4f85-9973-57189749bc56',
    //   name: 'BEM',
    //   detail: 'Lions Basketball, Lions Futsal, Capoeira, Lions Badminton, Taekwondo UMN, Tenis Meja, Lions Voli, Spectre, Fortius'
    // },

  ]
  const optionsDropdown: IDropdownOptions[] = [
    {
      id: '1',
      title: 'Lembaga Kampus',
      action: () => {
        navigate('/archiveDetail')
      }
    },
    {
      id: '2',
      title: 'Organisasi',
      action: () => {
        navigate('/archiveDetail')
      }
    },
    {
      id: '3',
      title: 'UKM Olahraga',
      // action: () => {
      //   navigate('/archiveDetail')
      // }
    },
    {
      id: '4',
      title: 'UKM Seni & Budaya',
      // action: () => {
      //   navigate('/archiveDetail')
      // }
    },
    {
      id: '5',
      title: 'UKM Sains & Social',
      // action: () => {
      //   navigate('/archiveDetail')
      // }
    },
    {
      id: '6',
      title: 'Kemahasiswaan & LSO',
      // action: () => {
      //   navigate('/archiveDetail')
      // }
    },
    {
      id: '7',
      title: 'Media Kampus',
      // action: () => {
      //   navigate('/archiveDetail')
      // }
    },
    {
      id: '8',
      title: 'Student Affairs',
      // action: () => {
      //   navigate('/archiveDetail')
      // }
    },
    {
      id: '9',
      title: 'Fakultas',
      // action: () => {
      //   navigate('/archiveDetail')
      // }
    },
  ]

  return (
  <div className='p-8'>
    <div className='flex flex-col p-10'>
      <span className='titleArchive p-8 text-center'>ARCHIVE</span>
      <div className='flex justify-between p-8'>
        <Search/>
        <Dropdown options={optionsDropdown} parentIcon='Search' dropdownType='yellow' className='dropBg'> 
        Archive Type
        </Dropdown>
      </div>
      <div className='flex justify-center items-center'>
       <ArchiveCard card={cardData}/>
      </div>
    </div>
  </div>
  )
}

export default ArchiveType
