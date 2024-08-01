import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from 'utils/getAuth'

const PublicRoutes = (props: any) => {
  const { auth } = useAuth()

  return auth ? <Navigate to='/home' /> : <Outlet />
}

export default PublicRoutes
