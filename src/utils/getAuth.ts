import { useSelector } from 'react-redux'
import { RootState } from 'utils/redux/store'

export const useAuth = () => {
  // Get user from Redux store
  const user = useSelector((state: RootState) => state.login)

  if (user.isLoggedIn) {
    return {
      auth: true,
      user: user,
    }
  } else {
    return {
      auth: false,
      user: null,
    }
  }
}
