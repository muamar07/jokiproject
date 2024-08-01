import { TextMapping, TextTitle, LoadingOverlay } from 'components'
import './Register.scss'
import { textMappingData } from 'components/TextMapping/TextMapping'
import { FormField } from 'ui-kit/FormField'
import { Button } from 'ui-kit'
import { ISelectOption } from 'interfaces/Select.interface'
import { db, storage } from '../../config/firebase'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { useState, ChangeEvent, FormEvent, useEffect } from 'react'
import { collection, addDoc } from 'firebase/firestore'
import FourDot from '../../assets/asset2.png'
import { useNavigate } from 'react-router-dom'
import AOS from 'aos'
// import { storage } from '../../config/firebase';
import 'aos/dist/aos.css'

interface FormData {
  name: string
  nim: string
  academicYear: ISelectOption[]
  // Gen: string
  Bukti: string
}

const Register = () => {
  const navigate = useNavigate()
  const [fullName, setFullName] = useState('')
  const [nim, setNim] = useState('')
  const [academicYearsOptions, setAcademicYearsOptions] = useState('')
  const [gen, setGen] = useState('')
  const [Bukti, setBukti] = useState('')
  const [isLoading, setLoading] = useState(false) // New state for loading overlay
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      setFile(files[0]);
    }
  };

  const angkatan: ISelectOption[] = [
    { label: '2020', value: '2020' },
    { label: '2021', value: '2021' },
    { label: '2022', value: '2022' },
    { label: '2023', value: '2023' },
    // { label: '2021', value: '2021' },
  ]

  const [formData, setFormData] = useState<FormData>({
    name: '',
    nim: '',
    academicYear: angkatan,
    // Gen: '',
    Bukti: '',
  })

  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFullName(event.target.value)
    // console.log('-> Full Name', fullName)
  }

  const handleChangeNim = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNim(event.target.value)
    // console.log('-> nim',nim)
  }

  const handleAngkatan = (value: string) => {
    setAcademicYearsOptions(value)
    // console.log('-> phone', phoneNumber)
  }

  // const handleGen = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setGen(event.target.value)
  //   // console.log('-> ig', instagramUsername)
  // }

  const handleBukti = (value: string) => {
    setBukti(value)
    // console.log('-> ig', instagramUsername)
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const blob = new Blob([Bukti], { type: 'image/jpeg' });

    const collectionRef = collection(db, 'absensi-sertijab')

    if (
      fullName.trim() === '' ||
      nim.trim() === '' ||
      academicYearsOptions === '' ||
      // gen.trim() === '' ||
      !file
    ) {
      alert('Mohon isi form dengan benar')
      return
    }

    setLoading(true)

    try {
      const storageRef = ref(storage, `Bukti-absensi/${file.name}`);
      await uploadBytes(storageRef, file);

      const downloadURL = await getDownloadURL(storageRef);
      const tempData = {
        name: fullName,
        nim: nim,
        academicYear: academicYearsOptions,
        // gen: gen,
        Bukti: downloadURL,
      }

      await addDoc(collectionRef, tempData)
      console.log('Data added to Firestore successfully')
      alert('Terima kasih telah mengisi absensi')

      navigate('/thankyou')

      setFormData({
        name: '',
        nim: '',
        academicYear: angkatan,
        // Gen: '',
        Bukti: '',
      }) //<--- clear state per form
      console.log('-> Full Name', fullName)
      console.log('-> nim', nim)
      console.log('-> angkatan', academicYearsOptions)
    } catch (error) {
      console.error('Error adding data to Firestore: ', error)
    }
    setLoading(false)
  }

  const textData: textMappingData[] = [
    {
      id: 1,
      textMap: '',
    },
  ]

  return (
    <>
      <div className='regCover' data-aos='fade-up'>
        <div className='flex flex-col gap-[50px] ' data-aos='fade-up'>
          <div className='titleContainer' data-aos='fade-up'>
            <TextTitle
              TitleUp='Absensi Sertijab'
              TitleBottom='UMN Documentation Gen 8'
              isDate
              date='19 Februari 2024'
              type='Small'
            />
          </div>
          {/* <div className='shapeYellow'></div> */}
        </div>
      </div>
      <div className='yellow-line' data-aos='fade-up'>
        <div className='shapeYellow3 pb-0'></div>
        <div className='black-bg pb-0'></div>
      </div>
      <div className='regCover'>
        <div className='flex flex-col gap-[50px]'>
          <div className='REQ flex '>
            <TextMapping
              title='Silahkan diperhatikan dalam pengisian data diri'
              // options={textData}
            />
          </div>
        </div>
      </div>
      <div className='regCover'>
        <form onSubmit={handleSubmit}>
          <div className='w-[85%] md:w-[60%] flex flex-col gap-[30px] KECIL' data-aos='fade-up'>
            <FormField
              type={'text'}
              placeholder='Nama'
              label='Nama Lengkap'
              name='name'
              value={fullName}
              onChange={handleChangeName}
              isRequired={true}
            />
            <FormField
              type={'text'}
              placeholder='NIM'
              label='NIM'
              name='nim'
              value={nim}
              onChange={handleChangeNim}
              isRequired={true}
            />
            <FormField
              // type={'select'}
              type={'select'}
              placeholder='2023/2022/2021/2020'
              label='Angkatan'
              options={angkatan}
              value={academicYearsOptions}
              // onChange={(e) => handleAngkatan(e.target.value)}
              onChangeSelect={(value) => handleAngkatan(value)}
              isRequired={true}
            />
            {/* <FormField
              type={'text'}
              placeholder='Silahkan masukkan Gen UMN Documentation'
              label='Gen UMN Documentation'
              name='gen'
              value={gen}
              onChange={handleGen}
              isRequired={true}
            /> */}
            <FormField
              type={'file'}
              placeholder='Silahkan upload foto selfie dengan BPH baru'
              label='Bukti Kehadiran (Foto dengan salah satu BPH/Koor UMN Documentation Gen8)'
              name='Bukti'
              // value={Bukti}
              onChange={handleFileChange}
              isRequired={true}
            />
            {/* <div className='btnSubmit'>
              <span>Bukti Kehadiran (Foto dengan salah satu BPH/Koor UMN Documentation Gen8) *</span>
              <input type="file" onChange={handleFileChange} accept="image/*" />
            </div>
            */}
            <div>
              <Button className='btnNext' type='submit'>
                Submit
              </Button>
            </div>
          </div>
        </form>
      </div>

      {isLoading && <LoadingOverlay />}
      {/* <img src={SideAsset} className='relative w-[5%] rounded-none mb-6' /> */}
    </>
  )
}

export default Register
