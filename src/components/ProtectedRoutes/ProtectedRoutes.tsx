import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from 'utils/getAuth'

//protected Route state
type ProtectedRouteType = {
  roleRequired?: 'ADMIN' | 'USER'
}

const ProtectedRoutes = (props: ProtectedRouteType) => {
  const { auth, user } = useAuth()

  //if the role required is there or not
  if (props.roleRequired) {
    return auth && user ? (
      props.roleRequired === user.role ? (
        <Outlet />
      ) : (
        <Navigate to='/denied' />
      )
    ) : (
      <Navigate to='/login' />
    )
  } else {
    return auth ? <Outlet /> : <Navigate to='/login' />
  }
}

export default ProtectedRoutes
