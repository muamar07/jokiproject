import { ArchiveCard, Dropdown, Search } from 'ui-kit'
import './ArchiveDetail.scss'
import { useState } from 'react';
import { IDropdownOptions } from 'ui-kit/Dropdown/Dropdown';
import { useNavigate } from 'react-router-dom';
import { CardComponent } from 'components';
import { cardInterface } from 'ui-kit/ArchiveCard/ArchiveCard';
import Foto_Crew from '../../assets/Crew_3.jpg'
import Foto_Crew1 from '../../assets/Crew_11.jpg'
import Foto_Crew2 from '../../assets/Crew_12.jpg'

const ArchiveDetail = () => {
  const navigate = useNavigate()
  const cardData: cardInterface[] = [
    {
      id: '1',
      image: Foto_Crew,
      name: 'Wisuda XXIII',
      link: 'https://multimedianusantara-my.sharepoint.com/:f:/g/personal/angga_sahroni_student_umn_ac_id/ErlyRaFF90NJkNLuLOAUHb4BZoqQ6a9veY3tFem_JVvnew?e=MbxOdL'
    },
    {
      id: '2',
      image: Foto_Crew1,
      name: 'LLDIKTI',
      link: 'https://multimedianusantara-my.sharepoint.com/:f:/g/personal/angga_sahroni_student_umn_ac_id/EvJuN0JkjPpJi4guf3CSqocBFtd_nYORBgoEjz5cyhtwFA?e=6eh9E9'
    },
    {
      id: '3',
      image: Foto_Crew2,
      name: 'Ramah Tamah',
      link: 'https://multimedianusantara-my.sharepoint.com/:f:/g/personal/angga_sahroni_student_umn_ac_id/Egm1qSrK-l9Hq0JlIpLXdzMBUegilSFFRcLie-loBv-1MQ?e=beaRjR'
    },
    {
      id: '4',
      image: Foto_Crew,
      name: 'Literacy Week',
      link: 'https://multimedianusantara-my.sharepoint.com/:f:/g/personal/angga_sahroni_student_umn_ac_id/ErlQKjpVTJ5DiUIOUeF4jSsBv1mqlLBLSleQbpJIhs_3bg?e=3QyuZD'
    },
  ]
  const optionsDropdown: IDropdownOptions[] = [
    {
      id: '1',
      title: '2020',
      action: () => {
        navigate('/archiveDetail')
      }
    },
    {
      id: '2',
      title: '2021',
      // action: () => {
      //   navigate('/archiveDetail')
      // }
    },
    {
      id: '3',
      title: '2022',
      // action: () => {
      //   navigate('/archiveDetail')
      // }
    },
    {
      id: '4',
      title: '2023',
      // action: () => {
      //   navigate('/archiveDetail')
      // }
    },
    // {
    //   id: 5,
    //   title: 'UKM Sains & Social',
    //   // action: () => {
    //   //   navigate('/archiveDetail')
    //   // }
    // },
    // {
    //   id: 6,
    //   title: 'Kemahasiswaan & LSO',
    //   // action: () => {
    //   //   navigate('/archiveDetail')
    //   // }
    // },
    // {
    //   id: 7,
    //   title: 'Media Kampus',
    //   // action: () => {
    //   //   navigate('/archiveDetail')
    //   // }
    // },
    // {
    //   id: 8,
    //   title: 'Student Affairs',
    //   // action: () => {
    //   //   navigate('/archiveDetail')
    //   // }
    // },
    // {
    //   id: 9,
    //   title: 'Fakultas',
    //   // action: () => {
    //   //   navigate('/archiveDetail')
    //   // }
    // },
  ]

  return (
  <div className='p-8'>
    <div className='flex flex-col p-10'>
      <span className='titleArchive p-8 text-center'>ARCHIVE</span>
      <div className='flex justify-center items-center'>
        {/* <Search/> */}
        <Dropdown options={optionsDropdown} parentIcon='Search' dropdownType='yellow' className='dropBg'> 
        Select Year
        </Dropdown>
      </div>
      <div className='flex justify-center items-center'>
       <ArchiveCard card={cardData}/>
      </div>
    </div>
  </div>
  )
}

export default ArchiveDetail
