import './Admin.scss'
import Logo from '../../assets/Logo.jpeg'
import { BtnAgree, Icon, ModalViewMore, Table } from 'ui-kit'
import { Column } from 'react-table'
import { useEffect, useMemo, useState } from 'react'
import { db } from '../../config/firebase'
import { getDocs, collection } from 'firebase/firestore'
import useModal from 'utils/getModal'

// test branch
export interface AdminInterface {
  id: string
  academicYear: string
  alasan: string
  bersedia: string
  domisili: string
  instagram: string
  jobdesk: string | string[]
  komitmen: string
  lineId: string
  name: string
  nim: string
  organisasi: string
  phoneNumber: string
  studyProgram: string
  hasil: boolean
}

const Admin = () => {
  const [AdminData, setAdminData] = useState<AdminInterface[]>([])
  const [ids, setIds] = useState<string[]>([])
  const [selectedName, setSelectedName] = useState<string>('')
  const [selectedAlasan, setSelectedAlasan] = useState<string>('')
  const [selectedBersedia, setSelectedBersedia] = useState<string>('')
  const [selectedDomisili, setSelectedDomisili] = useState<string>('')
  const [selectedPhoneNumber, setSelectedPhoneNumber] = useState<string>('')
  const [selectedOrganisasi, setSelectedOrganisasi] = useState<string>('')
  const [selectedKomitmen, setSelectedKomitmen] = useState<string>('')
  const [visibleMore, toggleMore] = useModal()
  const [isLulus, setIsLulus] = useState<boolean>(false)
  const [dataObject, setDataObject] = useState<any>()

  const updateIsLulus = (newIsLulus: boolean) => {
    setIsLulus(newIsLulus);
  };

  const handleMore = (
    name: string,
    alasan: string,
    bersedia: string,
    domisili: string,
    phoneNumber: string,
    organisasi: string,
    komitmen: string
  ) => {
    setSelectedName(name)
    setSelectedAlasan(alasan)
    setSelectedBersedia(bersedia)
    setSelectedDomisili(domisili)
    setSelectedPhoneNumber(phoneNumber)
    setSelectedOrganisasi(organisasi)
    setSelectedKomitmen(komitmen)
    toggleMore()
  }

  const fetchAdmin = async () => {
    try {
      const locationQuerySnapshot = await getDocs(collection(db, 'new-member'))
      const fetchedIds = locationQuerySnapshot.docs.map((doc) => doc.id)
      // console.log(ids)
      setIds(fetchedIds) // Update the 'ids' state variable with the array of IDs
      const fetchedAdmin: any = []
      locationQuerySnapshot.forEach((doc) => {
        const admin = doc.data()
        fetchedAdmin.push({
          id: doc.id,
          academicYear: admin.academicYear,
          alasan: admin.alasan,
          bersedia: admin.bersedia,
          domisili: admin.domisili,
          instagram: admin.instagram,
          jobdesk: admin.jobdesk,
          komitmen: admin.komitmen,
          lineId: admin.lineId,
          name: admin.name,
          nim: admin.nim,
          organisasi: admin.organisasi,
          phoneNumber: admin.phoneNumber,
          studyProgram: admin.studyProgram,
          hasil: admin.hasil
        })
      })
      setAdminData(fetchedAdmin)
    } catch (error) {
      console.log('Error fetching locations:', error)
    }
  }

  const renderJobdesk = (jobdesk: string | string[] | { label: string; value: string }[]) => {
    if (Array.isArray(jobdesk)) {
      const labels = jobdesk.map((item) =>
        typeof item === 'string' ? item : (item as { label: string }).label
      )
      return labels.join(', ')
    } else {
      return jobdesk
    }
  }

  useEffect(() => {
    fetchAdmin()
  }, [])

  const columns: Column<object>[] = useMemo(
    () => [
      {
        Header: 'Name',
        accessor: 'name',
        disableSortBy: false,
        collapse: false,
        Cell: (props: { value: string }) => {
          return <span className='text-black'>{props.value}</span>
        },
      },
      {
        Header: 'NIM',
        accessor: 'nim',
        disableSortBy: false,
        collapse: false,
        Cell: (props: { value: string }) => {
          return <span className='text-black'>{props.value}</span>
        },
      },
      {
        Header: 'Prodi',
        accessor: 'studyProgram',
        disableSortBy: false,
        collapse: false,
        Cell: (props: { value: string }) => {
          return <span className='text-black'>{props.value}</span>
        },
      },
      {
        Header: 'Angkatan',
        accessor: 'academicYear',
        disableSortBy: false,
        collapse: false,
        Cell: (props: { value: string }) => {
          return <span className='text-black'>{props.value}</span>
        },
      },
      {
        Header: 'ID Line',
        accessor: 'lineId',
        disableSortBy: false,
        collapse: false,
        Cell: (props: { value: string }) => {
          return <span className='text-black'>{props.value}</span>
        },
      },
      {
        Header: 'Username IG',
        accessor: 'instagram',
        disableSortBy: false,
        collapse: false,
        Cell: (props: { value: string }) => {
          return <span className='text-black'>{props.value}</span>
        },
      },
      {
        Header: 'Jobdesc',
        accessor: 'jobdesk',
        disableSortBy: false,
        collapse: false,
        Cell: (props: { value: string | string[] }) => {
          return <span className='text-black'>{renderJobdesk(props.value)}</span>
        },
      },
      {
        Header: 'Show More',
        accessor: 'alasan',
        disableSortBy: true,
        collapse: false,
        Cell: (props: { value: string; row: any }) => {
          return (
            <div className='flex gap-2 items-center'>
              <span
                className='text-black cursor-pointer'
                onClick={() =>
                  handleMore(
                    props.row.original.name,
                    props.value,
                    props.row.original.bersedia,
                    props.row.original.domisili,
                    props.row.original.phoneNumber,
                    props.row.original.organisasi,
                    props.row.original.komitmen
                  )
                }
              >
                {props.value ? 'View More' : ''}
              </span>
            </div>
          )
        },
      },
    ],
    []
  )

  return (
    <>
      <div className='adminBg'>
        <img src={Logo} className='logoAdmin' />
        <div className='adminBody'>
          <div className='adminBody-text'>
            <span className='adminBody-text-span'>UMN Documentation Admin Area</span>
          </div>
          <div className='w-full'>
            <Table columns={columns} data={AdminData as any} isScroll isSearch isPagination />
          </div>
          <BtnAgree/>
        </div>
      </div>
      <div className="table">
        {selectedName &&
        selectedAlasan &&
        selectedBersedia &&
        selectedDomisili &&
        selectedPhoneNumber &&
        selectedOrganisasi &&
        selectedKomitmen && (
          <ModalViewMore
            toggle={toggleMore}
            visible={visibleMore}
            name={selectedName}
            alasan={selectedAlasan}
            bersedia={selectedBersedia}
            domisili={selectedDomisili}
            phoneNumber={selectedPhoneNumber}
            organisasi={selectedOrganisasi}
            komitmen={selectedKomitmen}
            isLulus={isLulus}
          />
        )}
      </div>
      
    </>
  )
}

export default Admin
