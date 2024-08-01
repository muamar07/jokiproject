import './KolasePhoto.scss'
import Kolase1 from '../../assets/kolase1.jpg';
import Kolase2 from '../../assets/kolase2.jpg';
import Kolase3 from '../../assets/kolase3.jpg';
import Kolase4 from '../../assets/kolase4.jpg';
import Kolase5 from '../../assets/cek2.jpg';
import { kolaseData } from './kolaseData'
import { useHref, useNavigate, useParams } from 'react-router-dom'
import React, { useState } from 'react'

const SliderImage = ({ kolase = kolaseData }) => {
  const [current, setCurrent] = useState(0)
  const length = kolase.length
  const { id } = useParams()

  const navigate = useNavigate()
  const handleClick = () => {
    navigate('https://multimedianusantara-my.sharepoint.com/personal/angga_sahroni_student_umn_ac_id/_layouts/15/onedrive.aspx?ga=1&id=%2Fpersonal%2Fangga%5Fsahroni%5Fstudent%5Fumn%5Fac%5Fid%2FDocuments%2FAssetWebTemp%2FFoto%20Website')
  }
}

const KolasePhoto = () => {
  return (
    <div className="container">
      <div className="box">
        <div className="col1">
          <a href='https://multimedianusantara-my.sharepoint.com/personal/angga_sahroni_student_umn_ac_id/_layouts/15/onedrive.aspx?ga=1&id=%2Fpersonal%2Fangga%5Fsahroni%5Fstudent%5Fumn%5Fac%5Fid%2FDocuments%2FAssetWebTemp%2FFoto%20Website'>
            <img className='imageKolase' src={Kolase1}/>
          </a> 
        </div>
        <div className="col2">
          <div className='col2-1'>
            <a  href='https://multimedianusantara-my.sharepoint.com/personal/angga_sahroni_student_umn_ac_id/_layouts/15/onedrive.aspx?ga=1&id=%2Fpersonal%2Fangga%5Fsahroni%5Fstudent%5Fumn%5Fac%5Fid%2FDocuments%2FAssetWebTemp%2FFoto%20Website'>
              <img className='imageKolase' src={Kolase2}/>
            </a>
          </div>
          <div className='col2-2'>
            <a href='https://multimedianusantara-my.sharepoint.com/personal/angga_sahroni_student_umn_ac_id/_layouts/15/onedrive.aspx?ga=1&id=%2Fpersonal%2Fangga%5Fsahroni%5Fstudent%5Fumn%5Fac%5Fid%2FDocuments%2FAssetWebTemp%2FFoto%20Website'>
              <img className='imageKolase' src={Kolase3}/>
            </a>
            <a href='https://multimedianusantara-my.sharepoint.com/personal/angga_sahroni_student_umn_ac_id/_layouts/15/onedrive.aspx?ga=1&id=%2Fpersonal%2Fangga%5Fsahroni%5Fstudent%5Fumn%5Fac%5Fid%2FDocuments%2FAssetWebTemp%2FFoto%20Website'>
             <img className='imageKolase' src={Kolase4}/>
            </a>
          </div>
        </div>
        <div className="col3">
          <a href='https://multimedianusantara-my.sharepoint.com/personal/angga_sahroni_student_umn_ac_id/_layouts/15/onedrive.aspx?ga=1&id=%2Fpersonal%2Fangga%5Fsahroni%5Fstudent%5Fumn%5Fac%5Fid%2FDocuments%2FAssetWebTemp%2FFoto%20Website'>
            <img className='imageKolase' src={Kolase5}/>
          </a>
        </div>
      </div>
    </div>
  )
}

export default KolasePhoto
