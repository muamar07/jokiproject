import { FormField } from 'ui-kit/FormField'
import './Main.scss'
import { Button, ModalView } from 'ui-kit'
import useModal from 'utils/getModal'
import { useState } from 'react'
import { db, functions } from '../../config/firebase'
import { addDoc, collection, serverTimestamp  } from 'firebase/firestore'
import { NavLink } from 'react-router-dom'

interface FormErrors {
  nama?: string
  email?: string
  makananFavorit?: string
  minumanFavorit?: string
  harapan?: string
  deskripsi?: string
}

const Main = () => {
  const [visibleAlert, toggleAlert] = useModal()
  const [visibleSubmit, toggleSubmit] = useModal()
  const [showModal, setShowModal] = useState(false)
  const [errors, setErrors] = useState<FormErrors>({})
  const [formData, setFormData] = useState({
    nama: '',
    email: '',
    makananFavorit: '',
    minumanFavorit: '',
    harapan: '',
    deskripsi: '',
  })

  const validateForm = (): boolean => {
    let isValid = true
    let errorMessage = ''

    if (!formData.nama) {
      errorMessage += 'Nama wajib diisi.\n'
      isValid = false
    }
    if (!formData.email) {
      errorMessage += 'Email wajib diisi.\n'
      isValid = false
    }
    if (!formData.makananFavorit) {
      errorMessage += 'Makanan Favorit wajib diisi.\n'
      isValid = false
    }
    if (!formData.minumanFavorit) {
      errorMessage += 'Minuman Favorit wajib diisi.\n'
      isValid = false
    }
    if (!formData.harapan) {
      errorMessage += 'Harapan wajib diisi.\n'
      isValid = false
    }
    if (!formData.deskripsi) {
      errorMessage += 'Deskripsi wajib diisi.\n'
      isValid = false
    }

    if (!isValid) {
      alert(errorMessage)
    }

    return isValid
  }

  const handleChange = (e: any) => {
    const { name, value } = e.target
    setFormData((prevData) => ({ ...prevData, [name]: value }))
  }

  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    try {
      const dataToSend = {
        ...formData,
        submittedAt: serverTimestamp() // Menambahkan waktu saat data dikirim
      }

      await addDoc(collection(db, 'support'), dataToSend)
      setFormData({
        nama: '',
        email: '',
        makananFavorit: '',
        minumanFavorit: '',
        harapan: '',
        deskripsi: '',
      })
      setShowModal(true)
      toggleSubmit();
    } catch (error) {
      console.error('Error adding document: ', error)
      alert('Failed to submit data')
    }
  }

  return (
    <>
      <div className='mainBasic'>
        <span className='mainTitle'>Isi Yukk</span>
        <div className='mainContainer'>
          <form className='mainForm' onSubmit={handleSubmit}>
            <div className='flex flex-col gap-10'>
              <FormField
                className='formColumn'
                type={'text'}
                placeholder='Nama panggilan ajaa'
                label='Nama'
                name='nama'
                value={formData.nama}
                onChange={handleChange}
                isRequired
              />
              {errors.nama && <span className='error'>{errors.nama}</span>}
              <FormField
                type={'text'}
                placeholder='Email student yaa (disarankan)'
                label='Email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                isRequired
              />
              {errors.email && <span className='error'>{errors.email}</span>}
              <FormField
                type={'text'}
                placeholder='Jangan jawab banyak yaa hahaha'
                label='Makanan Favorit'
                name='makananFavorit'
                value={formData.makananFavorit}
                onChange={handleChange}
                isRequired
              />
              {errors.makananFavorit && <span className='error'>{errors.makananFavorit}</span>}
              <FormField
                type={'text'}
                placeholder='Dilarang minuman keras'
                label='Minuman Favorit'
                name='minumanFavorit'
                value={formData.minumanFavorit}
                onChange={handleChange}
                isRequired
              />
              {errors.minumanFavorit && <span className='error'>{errors.minumanFavorit}</span>}
            </div>
            <div className='flex flex-col gap-10'>
              <FormField
                type={'text'}
                placeholder='Boleh dong ceritain dikit harapannya'
                label='Harapan untuk Masa Depan'
                name='harapan'
                value={formData.harapan}
                onChange={handleChange}
                isRequired
              />
              {errors.harapan && <span className='error'>{errors.harapan}</span>}
              <div>
                <FormField
                  type={'text'}
                  placeholder='Kasih kata kata juga yaa, kalo mau katain juga boleh'
                  label='Coba deskripsiin dong tentang orang yang buat website ini. Gatau orangnya? Cek dibawah'
                  name='deskripsi'
                  value={formData.deskripsi}
                  onChange={handleChange}
                  isRequired
                />
                {errors.deskripsi && <span className='error'>{errors.deskripsi}</span>}
              </div>

              <Button className='btnSave' type='submit'>
                Submit yuk
              </Button>
            </div>
          </form>
        </div>
        <div className='footerContainer'>
          <div className='footerBtn'>
            <span className='mainFooter'>Ragu buat ngisi?</span>
            <Button className='btnSure' onClick={toggleAlert}>
              Coba klik biar gak ragu
            </Button>
          </div>
          <div className='footerBtn'>
            <span className='mainFooter'>Mau tau siapa author nya?</span>
            <NavLink to='https://www.instagram.com/frmshrni83' target='_blank'>
              <Button className='btnAuthor'>Nih author nya</Button>
            </NavLink>
          </div>
        </div>
      </div>

      <ModalView
        visible={visibleAlert}
        toggle={toggleAlert}
        title='Pemberitahuan'
        description={
          '1. Data nya gak dipake bukan buat pinjol kok, tenang 😛\n2. ⁠Jawabnya jangan sambil ke pressure yaa, disini jawabannya gak ada yang salah kok. Jangan takut gak naik kelas ya\n3. ⁠Jawab nya yang jujur ya .. author tau nih kalo jawabannya boong (dosa juga lohh)\n4. Selamat mengisi'
        }
      />

      {showModal && (
        <ModalView
          visible={visibleSubmit}
          toggle={toggleSubmit}
          title='JAWABAN BERHASIL DIKIRIM'
          description='SELAMAT, JAWABAN BERHASIL DIKIRIMM, STAY TUNE DAN PANTAU EMAILL YAA SECARA BERKALA (CEK SPAM JUGA JANGAN LUPA). MAKACIIIII'
        />
      )}
    </>
  )
}

export default Main
