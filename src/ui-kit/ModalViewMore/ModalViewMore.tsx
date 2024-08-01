import ReactDOM from 'react-dom'
import './ModalViewMore.scss'
import classNames from 'classnames'
import { Icon } from 'ui-kit'
import { useState } from 'react'
import { doc, setDoc, DocumentReference, Firestore, deleteDoc, updateDoc, deleteField,getFirestore, collection } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../../config'
import {db} from '../../config/firebase'
import { AdminInterface } from 'pages/AdminPage/Admin'


// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const db: Firestore = getFirestore(app);

interface ModalViewMoreInterface {
  name?: string
  visible: boolean
  toggle: () => void
  alasan?: string
  bersedia?: string
  domisili?: string
  jobdesk?: string | string[]
  phoneNumber?: string
  organisasi?: string
  komitmen?: string
  isLulus?: boolean
  dbLocation?: string
  onSave?: () => void
  dataTable?: AdminInterface
}

const ModalViewMore: React.FC<ModalViewMoreInterface> = ({
  name,
  visible,
  toggle,
  alasan,
  bersedia,
  domisili,
  phoneNumber,
  organisasi,
  komitmen,
  dbLocation,
  onSave,
  isLulus = false,
  dataTable
}) => {
  const [isChecked, setIsChecked] = useState(isLulus);
  const [showDate, setShowDate] = useState(false);
  const [date, setDate] = useState('');
  const [isSaved, setIsSaved] = useState(false);
  const [tanggal, setTanggal] = useState('');

  

  // const updateHasil = async (hasil:any) => {
  //   try{
  //     const docRef = doc(db, 'new-member', hasil.id);

  //     await updateDoc(docRef, hasil)
  //     toggle()
  //     onSave?.()

  //   }catch (error){
  //     console.log('Error : ', error)
  //   }
  //   setIsSaved(false)
    
  // }

  const handleDateInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDate(event.target.value);
  };

  const handleCheckboxChange = async () => {
    const updatedIsLulus = !isChecked;
    setIsChecked(updatedIsLulus);
    setShowDate(updatedIsLulus);

    if (name) {
      const docRef: DocumentReference = doc(db, 'new-member', name);

      try {
        if (updatedIsLulus) {
          // Checkbox dicentang, tambahkan field 'isLulus' dengan nilai 'true'
          await setDoc(docRef, { isLulus: true }, { merge: true });
        } else {
          // Checkbox tidak dicentang, hapus field 'isLulus' jika sudah ada
          await updateDoc(docRef, { isLulus: deleteField() });
        }
      } catch (error) {
        console.error('Error updating document: ', error);
      }
    }
  };

  const updateHasil = async (hasil: any) => {
    try {
      const docRef = doc(db, 'new-member', hasil.id);
  
      // Buat objek yang akan diupdate ke Firebase
      const updateData = {
        isLulus: isChecked,
        tanggal: date, // Tambahkan tanggal ke data yang akan diupdate
      };
  
      await updateDoc(docRef, updateData);
      toggle();
      onSave?.();
    } catch (error) {
      console.error('Error: ', error);
    }
    setIsSaved(false);
  };

  const editHasil = async () => {
    try{
      setIsSaved(true)
      const newHasil = {
        id: dataTable?.id,
        isLulus: dataTable?.hasil
      }
      await updateHasil(newHasil)
      console.log('Data sudah diperbarui')
      toggle()
    } catch(error){
      console.error('Gagal mengubah data : ', error)
    }
    setIsSaved(false)
  }

  const renderBody = () => {
    return (
      <div className='modals'>
        <div className='modalAddHeader'>
          <span className='modalAddHeader-text'>Crew Details | {name}</span>
          <Icon type='Close' size='small' onClick={toggle} />
        </div>
        <div className='modalAddBody'>
          <div className='flex flex-col gap-2'>
            <span className='text-black font-bold border-b-4 p-3 border-yellow-300'>Alasan</span>
            <span className='textDesc'>{alasan}</span>
          </div>
        </div>
        <div className='modalAddBody'>
          <div className='flex flex-col gap-2'>
            <span className='text-black font-bold border-b-4 p-3 border-yellow-300'>Bersedia</span>
            <span className='textDesc'>{bersedia}</span>
          </div>
        </div>
        <div className='modalAddBody'>
          <div className='flex flex-col gap-2'>
            <span className='text-black font-bold border-b-4 p-3 border-yellow-300'>Domisili</span>
            <span className='textDesc'>{domisili}</span>
          </div>
        </div>

        <div className='modalAddBody'>
          <div className='flex flex-col gap-2'>
            <span className='text-black font-bold border-b-4 p-3 border-yellow-300'>No Telephone</span>
            <span className='textDesc'>{phoneNumber}</span>
          </div>
        </div>
        <div className='modalAddBody'>
          <div className='flex flex-col gap-2'>
            <span className='text-black font-bold border-b-4 p-3 border-yellow-300'>Organisasi</span>
            <span className='textDesc'>{organisasi}</span>
          </div>
        </div>
        <div className='modalAddBody'>
          <div className='flex flex-col gap-2'>
            <span className='text-black font-bold border-b-4 p-3 border-yellow-300'>Komitmen</span>
            <span className='textDesc'>{komitmen}</span>
          </div>
        </div>
        
        <div className="lulus">
          <input
            type="checkbox"
            value="Lulus"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <label>Lulus</label><br/>
        </div>

        {showDate && (
          <div className="date">
            <label>Tanggal</label><br/>
            <input 
              type="date"
              value={date}
              onChange={handleDateInputChange}/>
          </div>
        )}
        <div className="save">
          <button className='btn btn-blue' onClick={editHasil}>Save</button>
        </div>
      </div>
    )
  }

  return ReactDOM.createPortal(
    <div
      className={classNames('modal', {
        'modal-open': visible,
      })}
    >
      <div className='modal-box p-0'>{visible ? renderBody() : ''}</div>
    </div>,
    document.body
  )
}

export default ModalViewMore;